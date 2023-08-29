import * as yup from "yup";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";
import { useAppDispatch } from "../../store/hooks";
import { createSubCategory } from "../../store/SubCategorySlice/SubCategorySlice";

type InitialValuesType = {
  name: string;
  category: string;
};

const useAddSubCategory = () => {
  const dispatch = useAppDispatch();

  const initialValues: InitialValuesType = {
    name: "",
    category: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("الاسم مطلوب"),
    category: yup.string().required("التصنيف مطلوب"),
  });

  const onSubmit = async (
    values: InitialValuesType,
    {
      setFieldValue,
      setTouched,
      setSubmitting,
    }: FormikHelpers<InitialValuesType>
  ) => {
    dispatch(createSubCategory(values))
      .unwrap()
      .then(() => {
        toast.success("تمت الاضافة بنجاح");
        setFieldValue("name", "");
        setFieldValue("category", "");
        setTouched({ name: false, category: false });
      })
      .catch(() => {
        toast.error("يوجد خطا ما...");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return { initialValues, onSubmit, validationSchema };
};
export default useAddSubCategory;
