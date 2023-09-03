import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  closeModal,
  setProductId,
} from "../../store/products/DeleteProductModalSlice/DeleteProductModalSlice";
import { deleteProduct } from "../../store/products/ProductSlice/ProductSlice";
import { useState } from "react";

const useDeleteProductModal = () => {
  const dispatch = useAppDispatch();
  const { open, productId } = useAppSelector((state) => state.DeleteModal);

  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(setProductId(""));
  };

  const handleDeleteProduct = () => {
    setLoading(true);
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        setLoading(false);
        handleClose();
        toast.success("تمت الحذف بنجاح");
      })
      .catch(() => {
        toast.error("يوجد خطا ما...");
      });
  };

  return { open, handleClose, handleDeleteProduct, loading };
};

export default useDeleteProductModal;
