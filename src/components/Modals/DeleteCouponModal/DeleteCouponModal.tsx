import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useDeleteCouponModal from "../../../Hooks/Coupon/useDeleteCouponModal";

export default function DeleteCouponModal() {
  const { open, handleClose, handleDeleteCoupon, loading } =
    useDeleteCouponModal();

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
          هل انت متاكد من عملية حذف الكوبون؟
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
