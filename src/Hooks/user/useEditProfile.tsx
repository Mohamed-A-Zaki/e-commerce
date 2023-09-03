import { FormikHelpers } from "formik";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { EditProfileFormDataType } from "../../types/Auth/Auth.type";
import { updateProfileData } from "../../store/AuthSlice/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useEditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.Auth);

  const initialValues: EditProfileFormDataType = {
    name: user.name,
    phone: user.phone,
  };

  const validationSchema = yup.object({
    name: yup.string().required("هذا الحقل مطلوب"),
    phone: yup.string().required("هذا الحقل مطلوب"),
  });

  const onSubmit = (
    values: EditProfileFormDataType,
    { setSubmitting }: FormikHelpers<EditProfileFormDataType>
  ) => {
    dispatch(updateProfileData(values))
      .unwrap()
      .then(() => {
        navigate("/user/profile");
        toast.success("تم التعديل بنجاح");
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

export default useEditProfile;
