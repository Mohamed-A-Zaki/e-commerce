import * as yup from "yup";
import BaseURL from "../Api/BaseURL";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

type InitialValuesType = {
  name: string;
  category: string;
};

const useAddSubCategory = () => {
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
    { setFieldValue, setTouched }: FormikHelpers<InitialValuesType>
  ) => {
    try {
      await BaseURL.post("api/v1/subcategories", values);
      toast.success("تمت الاضافة بنجاح");
      setFieldValue("name", "");
      setFieldValue("category", "");
      setTouched({ name: false, category: false });
    } catch (error) {
      toast.error("يوجد خطا ما...");
    }
  };

  return { initialValues, onSubmit, validationSchema };
};
export default useAddSubCategory;
