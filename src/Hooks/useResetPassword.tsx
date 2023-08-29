import * as yup from "yup";
import { useAppDispatch } from "../store/hooks";
import { resetPassword } from "../store/AuthSlice/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { ResetFormDataType } from "../types/Auth/Auth.type";

const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: ResetFormDataType = {
    email: "",
    newPassword: "",
    passwrdConfirm: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("هذا الحقل مطلوب"),
    newPassword: yup
      .string()
      .required("هذا الحقل مطلوب")
      .min(6, "كلمة السر يجب ان تكون اكتر من 5 حروف"),
    passwordConfirm: yup
      .string()
      .required("هذا الحقل مطلوب")
      .oneOf([yup.ref("password")], "كلمة السر غير متطابقة"),
  });

  const onSubmit = (
    values: ResetFormDataType,
    { setSubmitting }: FormikHelpers<ResetFormDataType>
  ) => {
    dispatch(resetPassword(values))
      .unwrap()
      .then(() => {
        navigate("/login");
        localStorage.removeItem("email");
        toast.success("تم تغيير كلمة السر");
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

export default useResetPassword;
