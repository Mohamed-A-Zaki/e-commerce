import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from "@mui/material";
import ModalCancelButton from "../../../utility/Modal/ModalCancelButton/ModalCancelButton";
import ModalDeleteButton from "../../../utility/Modal/ModalDeleteButton/ModalDeleteButton";
import useDeleteProductFromCartModal from "../../../Hooks/Cart/useDeleteProductFromCartModal";

export default function DeleteProductFromCartModal() {
  const { open, handleClose, handleDeleteProduct, loading } =
    useDeleteProductFromCartModal();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      TransitionComponent={Slide}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title">حذف منتج من السلة</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل انت متاكد من عملية حذف المنتج؟
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: 1 }}>
        <ModalCancelButton onClick={handleClose} />
        <ModalDeleteButton onClick={handleDeleteProduct} disabled={loading} />
      </DialogActions>
    </Dialog>
  );
}
