import { clearCart } from "../../store/CartSlice/CartSlice";
import { closeClearCartModal } from "../../store/ClearCartModalSlice/ClearCartModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

const useClearCartModal = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.ClearCartModal);

  const handleClose = () => {
    dispatch(closeClearCartModal());
  };

  const handleClearCart = () => {
    setLoading(true);
    dispatch(clearCart())
      .unwrap()
      .then(() => {
        toast.success("تم حذف محتوي السلة");
        handleClose();
      })
      .catch(() => {
        toast.error("حدث خطأ اثناء حذف المحتوي");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { open, handleClose, loading, handleClearCart };
};

export default useClearCartModal;
