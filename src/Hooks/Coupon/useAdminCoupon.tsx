import { toast } from "react-toastify";
import { deleteCoupon } from "../../store/CouponSlice/CouponSlice";
import { useAppDispatch } from "../../store/hooks";

const useAdminCoupon = (id: string) => {
  const dispatch = useAppDispatch();

  const handleDeletCoupon = () => {
    dispatch(deleteCoupon(id))
      .unwrap()
      .then(() => {
        toast.success("تم الحذف بنجاح");
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      });
  };

  return { handleDeletCoupon };
};

export default useAdminCoupon;
