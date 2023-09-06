import { applyCopon } from "../../store/CartSlice/CartSlice";
import { openClearCartModal } from "../../store/ClearCartModalSlice/ClearCartModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

const useApplyCoupon = () => {
  const dispatch = useAppDispatch();
  const { totalAfterDiscount, coupon } = useAppSelector((state) => state.Cart);

  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponValue(e.target.value);
  };

  const handleDeleteButtton = () => {
    dispatch(openClearCartModal());
  };

  const handleApplyCoupon = () => {
    setLoading(true);

    dispatch(applyCopon(couponValue))
      .unwrap()
      .then(() => {
        toast.success("تم تطبيق الكوبون بنجاح");
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    handleDeleteButtton,
    totalAfterDiscount,
    coupon,
    handleChange,
    couponValue,
    handleApplyCoupon,
    loading
  };
};

export default useApplyCoupon;
