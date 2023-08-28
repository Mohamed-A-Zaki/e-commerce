import * as yup from "yup";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/AuthSlice/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { LoginFormDataType } from "../types/Auth/Auth.type";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: LoginFormDataType = {
    email: "admin@gmail.com",
    password: "pass123",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("هذا الحقل مطلوب"),
    password: yup
      .string()
      .required("هذا الحقل مطلوب")
      .min(6, "كلمة السر يجب ان تكون اكتر من 5 حروف"),
  });

  const onSubmit = (
    values: LoginFormDataType,
    { setSubmitting }: FormikHelpers<LoginFormDataType>
  ) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("تم تسجيل الدخول بنجاح");
        navigate("/");
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return { initialValues, validationSchema, onSubmit };
};

export default useLogin;
