import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getSpecificAddress,
  updateAddress,
} from "../../store/AddressSlice/AddressSlice";
import { AddressFormDataType } from "../../types/Address/Address.type";

import * as yup from "yup";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

const useEditAddress = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { address } = useAppSelector((state) => state.Address);

  useEffect(() => {
    dispatch(getSpecificAddress(id as string));
  }, [dispatch, id]);

  const initialValues: AddressFormDataType = {
    alias: address?.alias || "",
    details: address?.details || "",
    phone: address?.phone || "",
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
    dispatch(updateAddress({ id: id as string, address: values }))
      .unwrap()
      .then(() => {
        toast.success("تم التعديل بنجاح");
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

export default useEditAddress;
