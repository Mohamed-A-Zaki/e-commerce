import { useNavigate, useParams } from "react-router-dom";
import {
  editCoupon,
  getSpecificCoupon,
} from "../../store/CouponSlice/CouponSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { CouponFormDataType } from "../../types/Coupon/Coupon.type";
import * as yup from "yup";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

const useEditCoupon = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const naviagte = useNavigate();
  const { specificCoupon } = useAppSelector((state) => state.Coupon);

  useEffect(() => {
    dispatch(getSpecificCoupon(id as string));
    console.log("dnefuhfug");
  }, [dispatch, id]);

  const initialValues: CouponFormDataType = {
    name: specificCoupon?.name || "",
    expire: specificCoupon?.expire.slice(0, 10) || "",
    discount: specificCoupon?.discount.toString() || "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("هذا الحقل مطلوب"),
    expire: yup.string().required("هذا الحقل مطلوب"),
    discount: yup.string().required("هذا الحقل مطلوب"),
  });

  const onSubmit = (
    values: CouponFormDataType,
    { setSubmitting }: FormikHelpers<CouponFormDataType>
  ) => {
    dispatch(editCoupon({ id: id as string, values: values }))
      .unwrap()
      .then(() => {
        naviagte("/admin/addcoupon")
        toast.success("تمت التعديل بنجاح");
      })
      .catch(() => {
        toast.error("يوجد خطا ما...");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return { initialValues, validationSchema, onSubmit };
};

export default useEditCoupon;
