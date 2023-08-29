import { FormikHelpers } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { VerifyCodeFormDataType } from "../types/Auth/Auth.type";
import { verifyCode } from "../store/AuthSlice/AuthSlice";

const useVerifyCode = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: VerifyCodeFormDataType = {
    resetCode: "",
  };

  const validationSchema = yup.object({
    resetCode: yup.string().required("هذا الحقل مطلوب"),
  });

  const onSubmit = (
    values: VerifyCodeFormDataType,
    { setSubmitting }: FormikHelpers<VerifyCodeFormDataType>
  ) => {
    dispatch(verifyCode(values))
      .unwrap()
      .then(() => {
        navigate("/reset-password");
        toast.success("تم ارسال الكود");
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

export default useVerifyCode;
