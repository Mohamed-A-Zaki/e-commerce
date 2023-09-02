import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useDeleteAddressModal from "../../Hooks/Address/useDeleteAddressModal";

export default function DeleteAddressModal() {
  const { open, handleClose, handleDeleteCoupon, loading } =
    useDeleteAddressModal();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">حذف تقييم</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل انت متاكد من عملية حذف العنوان؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>الغاء</Button>
        <Button onClick={handleDeleteCoupon} autoFocus disabled={loading}>
          {loading ? "جاري الحذف" : "حذف"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
