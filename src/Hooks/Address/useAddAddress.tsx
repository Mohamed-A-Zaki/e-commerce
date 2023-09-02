import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { createAddress } from "../../store/AddressSlice/AddressSlice";
import { AddressFormDataType } from "../../types/Address/Address.type";

import * as yup from "yup";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

const useAddAddress = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: AddressFormDataType = {
    alias: "",
    details: "",
    phone: "",
  };

  const validationSchema = yup.object({
    alias: yup.string().required("هذا الحقل مطلوب"),
    details: yup.string().required("هذا الحقل مطلوب"),
    phone: yup.string().required("هذا الحقل مطلوب"),
  });

  const onSubmit = (
    values: AddressFormDataType,
    { setSubmitting }: FormikHelpers<AddressFormDataType>
  ) => {
    dispatch(createAddress(values))
      .unwrap()
      .then(() => {
        toast.success("تم الاضافة بنجاح");
        navigate("/user/addresses");
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return { validationSchema, onSubmit, initialValues };
};

export default useAddAddress;
