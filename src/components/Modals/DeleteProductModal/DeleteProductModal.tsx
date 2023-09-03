import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useDeleteProductModal from "../../../Hooks/Product/useDeleteProductModal";

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
        <Button onClick={handleClose} variant="contained" color="success">
          الغاء
        </Button>
        <Button
          onClick={handleDeleteProduct}
          variant="contained"
          color="error"
          autoFocus
          disabled={loading}
        >
          {loading ? "جاري الحذف" : "حذف"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
