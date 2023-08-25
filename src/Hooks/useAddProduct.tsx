import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createProduct } from "../store/ProductSlice/ProductSlice";
import { getSubCategory } from "../store/SubCategorySlice/SubCategorySlice";

export type ProductInitialValuesType = {
  title: string;
  category: string;
  brand: string;
  images: string[];
  description: string;
  quantity: string;
  price: string;
  price_after_descount: string;
  subcategory: { value: string; label: string }[];
  availableColors: string[];
};

const useAddProduct = () => {
  const [openColorPicker, setOpenColorPicker] = useState(false);

  const dispatch = useAppDispatch();
  const { brands } = useAppSelector((state) => state.Brands);
  const { categories } = useAppSelector((state) => state.Categories);
  const { subCategories } = useAppSelector((state) => state.Subcategory);

  const ToogleColorPicker = () => {
    setOpenColorPicker(!openColorPicker);
  };

  const handleGetSubCategories = async (cat_id: string) => {
    await dispatch(getSubCategory(cat_id));
  };

  const initialValues: ProductInitialValuesType = {
    title: "",
    category: "",
    brand: "",
    images: [],
    description: "",
    quantity: "",
    price: "",
    price_after_descount: "",
    subcategory: [],
    availableColors: [],
  };

  const validationSchema = yup.object({
    title: yup.string().required("هذا الحقل مطلوب"),
    category: yup.string().required("هذا الحقل مطلوب"),
    brand: yup.string().required("هذا الحقل مطلوب"),
    description: yup.string().required("هذا الحقل مطلوب"),
    quantity: yup.number().required("هذا الحقل مطلوب"),
    price: yup.number().required("هذا الحقل مطلوب"),
    images: yup.array().required().min(1, "يجب اختيار صورة واحدة علي الاقل"),
    subcategory: yup.array().optional(),
    availableColors: yup.array().optional(),
    price_after_descount: yup
      .number()
      .optional()
      .lessThan(yup.ref("price"), "السعر يجب ان يكون اقل من السعر قبل الخصم"),
  });

  const onSubmit = (
    values: ProductInitialValuesType,
    {
      setSubmitting,
      setFieldValue,
      setTouched,
    }: FormikHelpers<ProductInitialValuesType>
  ) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("imageCover", values.images[0]);
    formData.append("category", values.category);
    formData.append("description", values.description);
    formData.append("quantity", values.quantity);
    formData.append("price", values.price);
    formData.append("price_after_descount", values.price_after_descount);

    for (let i = 0; i < values.availableColors.length; i++) {
      formData.append("availableColors", values.availableColors[i]);
    }
    for (let i = 0; i < values.images.length; i++) {
      formData.append("images", values.images[i]);
    }
    for (let i = 0; i < values.subcategory.length; i++) {
      formData.append("subcategory", values.subcategory[i].value);
    }

    dispatch(createProduct(formData))
      .unwrap()
      .then(() => {
        toast.success("تمت الاضافة بنجاح");
        setFieldValue("title", "");
        setFieldValue("category", "");
        setFieldValue("description", "");
        setFieldValue("quantity", "");
        setFieldValue("price", "");
        setFieldValue("price_after_descount", "");
        setFieldValue("images", []);
        setFieldValue("availableColors", []);
        setFieldValue("subcategory", []);
        setFieldValue("brand", "");

        setTouched({
          title: false,
          category: false,
          brand: false,
          description: false,
          quantity: false,
          price: false,
          price_after_descount: false,
          images: false,
          availableColors: false,
          subcategory: [],
        });
      })
      .catch(() => {
        toast.error("يوجد خطا ما...");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return {
    initialValues,
    onSubmit,
    validationSchema,
    openColorPicker,
    ToogleColorPicker,
    categories,
    brands,
    handleGetSubCategories,
    subCategories,
  };
};

export default useAddProduct;
