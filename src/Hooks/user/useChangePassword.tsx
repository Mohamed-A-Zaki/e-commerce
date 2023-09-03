import { FormikHelpers } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/hooks";
import { ChangePasswordFormDataType } from "../../types/Auth/Auth.type";
import { changePassword } from "../../store/AuthSlice/AuthSlice";

const useChangePassword = () => {
  const dispatch = useAppDispatch();

  const initialValues: ChangePasswordFormDataType = {
    currentPassword: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = yup.object({
    currentPassword: yup.string().required("ادخل كلمة المرور الحالية"),
    password: yup.string().required("ادخل كلمة المرور الجديدة"),
    passwordConfirm: yup
      .string()
      .required("تاكيد كلمة المرور الجديدة")
      .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة"),
  });

  const onSubmit = (
    values: ChangePasswordFormDataType,
    { setSubmitting }: FormikHelpers<ChangePasswordFormDataType>
  ) => {
    dispatch(changePassword(values))
      .unwrap()
      .then(() => {
        toast.success("تم تغير كلمة المرور");
      })
      .catch(() => {
        toast.error("حدث خطأ ما");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return { initialValues, validationSchema, onSubmit };
};

export default useChangePassword;
