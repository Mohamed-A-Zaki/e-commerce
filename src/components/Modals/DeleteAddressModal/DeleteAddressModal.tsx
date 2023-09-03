import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useDeleteAddressModal from "../../../Hooks/Address/useDeleteAddressModal";

export default function DeleteAddressModal() {
  const { open, handleClose, handleDeleteCoupon, loading } =
    useDeleteAddressModal();

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
      <DialogTitle id="alert-dialog-title">حذف عنوان</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل انت متاكد من عملية حذف العنوان؟
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: 1 }}>
        <Button onClick={handleClose} variant="contained" color="success">
          الغاء
        </Button>
        <Button
          onClick={handleDeleteCoupon}
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
