import { useAppDispatch } from "../../store/hooks";
import * as yup from "yup";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";
import { CouponFormDataType } from "../../types/Coupon/Coupon.type";
import { useEffect, useState } from "react";
import { addCoupon, getCoupons } from "../../store/CouponSlice/CouponSlice";

const useAddCoupon = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoupons());
  }, [dispatch]);

  const [type, setType] = useState("string");

  const handleFocus = () => {
    setType("date");
  };

  const handleBlur = () => {
    setType("string");
  };

  const initialValues: CouponFormDataType = {
    name: "",
    expire: "",
    discount: "",
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
    dispatch(addCoupon(values))
      .unwrap()
      .then(() => {
        toast.success("تمت الاضافة بنجاح");
      })
      .catch((error) => {
        const code = Number(error.message.split(" ").slice(-1)[0]);
        if (code === 400) {
          toast.error("هذا الكود موجود بالفعل");
        } else {
          toast.error("يوجد خطا ما...");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    type,
    handleFocus,
    handleBlur,
  };
};

export default useAddCoupon;
