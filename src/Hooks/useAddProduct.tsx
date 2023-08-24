// import { toast } from "react-toastify";

import { useState } from "react";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSubCategory } from "../store/SubCategorySlice/SubCategorySlice";
// import { FormikHelpers } from "formik";
// import { useAppDispatch } from "../store/hooks";

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
    // imageCover: yup.string().required("هذا الحقل مطلوب"),
    category: yup.string().required("هذا الحقل مطلوب"),
    brand: yup.string().required("هذا الحقل مطلوب"),
    description: yup.string().required("هذا الحقل مطلوب"),
    quantity: yup.number().required("هذا الحقل مطلوب"),
    price: yup.number().required("هذا الحقل مطلوب"),
    price_after_descount: yup.number().required("هذا الحقل مطلوب"),
    images: yup.array().required().min(2, "يجب اختيار صورتين علي الاقل"),
    subcategory: yup
      .array()
      .required("هذا الحقل مطلوب")
      .min(1, "يجب اختيار تصنيف فرعي واحد علي الاقل"),
    colors: yup.array().optional(),
  });

  const onSubmit = (
    values: ProductInitialValuesType
    // { setSubmitting }: FormikHelpers<InitialValuesType>
  ) => {
    // const formData = new FormData();
    console.log(values);
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
