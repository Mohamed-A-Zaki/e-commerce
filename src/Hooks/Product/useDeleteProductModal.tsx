import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  closeModal,
  setProductId,
} from "../../store/products/DeleteProductModalSlice/DeleteProductModalSlice";
import { deleteProduct } from "../../store/products/ProductSlice/ProductSlice";

const useDeleteProductModal = () => {
  const dispatch = useAppDispatch();
  const { open, productId } = useAppSelector((state) => state.DeleteModal);

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(setProductId(""));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        handleClose();
        toast.success("تمت الحذف بنجاح");
      })
      .catch(() => {
        toast.error("يوجد خطا ما...");
      });
  };

  return { open, handleClose, handleDeleteProduct };
};

export default useDeleteProductModal;