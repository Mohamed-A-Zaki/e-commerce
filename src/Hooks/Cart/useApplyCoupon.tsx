import { useNavigate } from "react-router-dom";
import { applyCopon } from "../../store/CartSlice/CartSlice";
import { openClearCartModal } from "../../store/ClearCartModalSlice/ClearCartModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

const useApplyCoupon = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { totalAfterDiscount, coupon, cart_products } = useAppSelector(
    (state) => state.Cart
  );

  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponValue(e.target.value);
  };

  const handleDeleteButtton = () => {
    dispatch(openClearCartModal());
  };

  const goToPAymentMethod = () => {
    if (cart_products.length === 0) {
      toast.warn("السلة فارغة");
    } else {
      navigate("/order/paymethod");
    }
  };

  const handleApplyCoupon = () => {
    setLoading(true);

    dispatch(applyCopon(couponValue))
      .unwrap()
      .then(() => {
        toast.success("تم تطبيق الكوبون بنجاح");
      })
      .catch((error) => {
        const code = Number(error.message.split(" ").slice(-1)[0]);
        if (code === 400) {
          toast.error("هذا الكوبون غير صحيح او منتهي الصلاحية");
        } else {
          toast.error("يوجد خطا ما");
        }
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
    loading,
    goToPAymentMethod,
  };
};

export default useApplyCoupon;
