import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useAppDispatch } from "../../store/hooks";
import { RegisterFormDataType } from "../../types/Auth/Auth.type";
import { register } from "../../store/AuthSlice/AuthSlice";

const useRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: RegisterFormDataType = {
    name: "user3",
    email: "user3@gmail.com",
    password: "123456",
    passwordConfirm: "123456",
    phone: "01023456789",
  };

  const validationSchema = yup.object({
    name: yup.string().required("هذا الحقل مطلوب"),
    email: yup.string().email().required("هذا الحقل مطلوب"),
    phone: yup.string().length(11).required("هذا الحقل مطلوب"),
    password: yup
      .string()
      .required("هذا الحقل مطلوب")
      .min(6, "كلمة السر يجب ان تكون اكتر من 5 حروف"),
    passwordConfirm: yup
      .string()
      .required("هذا الحقل مطلوب")
      .oneOf([yup.ref("password")], "كلمة السر غير متطابقة"),
  });

  const onSubmit = (
    values: RegisterFormDataType,
    { setSubmitting }: FormikHelpers<RegisterFormDataType>
  ) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("تم تسجيل الحساب بنجاح");
        navigate("/");
      })
      .catch((error) => {
        const code = Number((error as Error).message.split(" ").slice(-1)[0]);
        console.log(code);
        if (code === 400) {
          toast.error("هذا الايميل موجود بالفعل");
        } else {
          toast.error("يوجد خطا ما");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return { initialValues, validationSchema, onSubmit };
};

export default useRegister;
