import { toast } from "react-toastify";
import { useRef, useState } from "react";

import * as yup from "yup";
import { FormikHelpers } from "formik";
import { useAppDispatch } from "../store/hooks";

import avatar from "../assets/avatar.png";
import { createCategory } from "../store/CategorySlice/CategorySlice";

type InitialValuesType = {
  name: string;
  image: string;
};

const useAddCategory = () => {
  const dispatch = useAppDispatch();

  const [image, setImage] = useState(avatar);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const initialValues: InitialValuesType = {
    name: "",
    image: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("هذا الحقل مطلوب"),
    image: yup.string().optional(),
  });

  const onSubmit = (
    values: InitialValuesType,
    {
      setSubmitting,
      setFieldValue,
      setTouched,
    }: FormikHelpers<InitialValuesType>
  ) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("image", inputRef.current?.files![0] as File);

    dispatch(createCategory(formData))
      .unwrap()
      .then(() => {
        toast.success("تمت الاضافة بنجاح");
        setImage(avatar);
        setFieldValue("name", "");
        setTouched({ name: false, image: false });
      })
      .catch(() => toast.error("يوجد خطا ما..."))
      .finally(() => setSubmitting(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImage(URL.createObjectURL(file));
  };

  return {
    image,
    handleChange,
    inputRef,
    initialValues,
    onSubmit,
    validationSchema,
  };
};

export default useAddCategory;
