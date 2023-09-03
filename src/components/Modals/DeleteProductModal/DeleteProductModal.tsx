import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useDeleteProductModal from "../../../Hooks/Product/useDeleteProductModal";
import ModalCancelButton from "../../../utility/Modal/ModalCancelButton/ModalCancelButton";
import ModalDeleteButton from "../../../utility/Modal/ModalDeleteButton/ModalDeleteButton";

export default function DeleteProductModal() {
  const { open, handleClose, handleDeleteProduct, loading } =
    useDeleteProductModal();

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
      <DialogTitle id="alert-dialog-title">حذف منتج</DialogTitle>
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
