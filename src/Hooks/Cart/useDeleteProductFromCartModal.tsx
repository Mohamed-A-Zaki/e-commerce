import { useState } from "react";
import { deleteProductFromCart } from "../../store/CartSlice/CartSlice";
import { closeDeleteProductFromCartModal } from "../../store/DeleteProductFromCartModalSlice/DeleteProductFromCartModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toast } from "react-toastify";

const useDeleteProductFromCartModal = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { open, prod_id } = useAppSelector(
    (state) => state.DeleteProductFromCart
  );

  const handleClose = () => {
    dispatch(closeDeleteProductFromCartModal());
  };

  const handleDeleteProduct = () => {
    setLoading(true);
    console.log(prod_id);
    dispatch(deleteProductFromCart(prod_id))
      .unwrap()
      .then(() => {
        handleClose();
        toast.success("تم حذف المنتج من السلة");
      })
      .catch(() => {
        toast.error("فشل في حذف المنتج من السلة");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { open, handleClose, handleDeleteProduct, loading };
};

export default useDeleteProductFromCartModal;
