import { toast } from "react-toastify";
import {
  closeDeleteCouponModal,
  setDeleteCouponID,
} from "../../store/DeleteCouponModalSlice/DeleteCouponModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteCoupon } from "../../store/CouponSlice/CouponSlice";

const useDeleteCouponModal = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.Coupon);
  const { open, couponID } = useAppSelector((state) => state.DeleteCouponModal);

  const handleClose = () => {
    dispatch(closeDeleteCouponModal());
    dispatch(setDeleteCouponID(""));
  };

  const handleDeleteCoupon = () => {
    dispatch(deleteCoupon(couponID))
      .unwrap()
      .then(() => {
        toast.success("تم الحذف بنجاح");
        handleClose();
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      });
  };

  return { open, handleClose, handleDeleteCoupon, loading };
};

export default useDeleteCouponModal;
