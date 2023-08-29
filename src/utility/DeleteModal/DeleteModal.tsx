import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useDeleteProductModal from "../../Hooks/Product/useDeleteProductModal";


export default function DeleteModal() {
  const { open, handleClose, handleDeleteProduct } = useDeleteProductModal();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">حذف منتج</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل انت متاكد من عملية حذف المنتج؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>الغاء</Button>
        <Button onClick={handleDeleteProduct} autoFocus>
          حذف
        </Button>
      </DialogActions>
    </Dialog>
  );
}
