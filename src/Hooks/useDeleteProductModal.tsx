import { toast } from "react-toastify";
import {
  closeModal,
  setProductId,
} from "../store/DeleteModalSlice/DeleteModalSlice";
import { deleteProduct } from "../store/ProductSlice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

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
