import * as yup from "yup";
import { useAppDispatch } from "../store/hooks";
import { sendCode } from "../store/AuthSlice/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { ForgetPasswordFormDataType } from "../types/Auth/Auth.type";

const useForgetPasssword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: ForgetPasswordFormDataType = {
    email: "mohamedzaki385@gmail.com",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("هذا الحقل مطلوب"),
  });

  const onSubmit = (
    values: ForgetPasswordFormDataType,
    { setSubmitting }: FormikHelpers<ForgetPasswordFormDataType>
  ) => {
    dispatch(sendCode(values))
      .unwrap()
      .then(() => {
        navigate("/verify-code");
        toast.success("تم ارسال الكود");
        localStorage.setItem("email", values.email);
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

export default useForgetPasssword;
