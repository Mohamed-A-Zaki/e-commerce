// import { toast } from "react-toastify";

import { useState } from "react";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSubCategory } from "../store/SubCategorySlice/SubCategorySlice";
import { createProduct } from "../store/ProductSlice/ProductSlice";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

export type ProductInitialValuesType = {
  title: string;
  // imageCover: string;
  category: string;
  brand: string;
  images: string[];
  description: string;
  quantity: string;
  price: string;
  price_after_descount: string;
  subcategory: { value: string; label: string }[];
  colors: string[];
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
    // imageCover: "",
    category: "",
    brand: "",
    images: [],
    description: "",
    quantity: "",
    price: "",
    price_after_descount: "",
    subcategory: [],
    colors: [],
  };

  const validationSchema = yup.object({
    title: yup.string().required("هذا الحقل مطلوب"),
    category: yup.string().required("هذا الحقل مطلوب"),
    brand: yup.string().required("هذا الحقل مطلوب"),
    description: yup.string().required("هذا الحقل مطلوب"),
    quantity: yup.number().required("هذا الحقل مطلوب"),
    price: yup.number().required("هذا الحقل مطلوب"),
    price_after_descount: yup.number().required("هذا الحقل مطلوب"),
    images: yup.array().required().min(1, "يجب اختيار صورة واحدة علي الاقل"),
    subcategory: yup.array().optional(),
    colors: yup.array().optional(),
  });

  const onSubmit = (
    values: ProductInitialValuesType,
    { setSubmitting, setFieldValue }: FormikHelpers<ProductInitialValuesType>
  ) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("imageCover", values.images[0]);
    formData.append("category", values.category);
    formData.append("description", values.description);
    formData.append("quantity", values.quantity);
    formData.append("price", values.price);
    formData.append("price_after_descount", values.price_after_descount);

    for (let i = 0; i < values.colors.length; i++) {
      formData.append("colors", values.colors[i]);
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
        setFieldValue("name", "");
        setFieldValue("category", "");
        // setTouched({ name: false, category: false });
      })
      .catch(() => {
        toast.error("يوجد خطا ما...");
      })
      .finally(() => {
        setSubmitting(false);
      });

    // console.log(formData);
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
