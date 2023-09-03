import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useDeleteCouponModal from "../../../Hooks/Coupon/useDeleteCouponModal";
import ModalCancelButton from "../../../utility/Modal/ModalCancelButton/ModalCancelButton";
import ModalDeleteButton from "../../../utility/Modal/ModalDeleteButton/ModalDeleteButton";

export default function DeleteCouponModal() {
  const { open, handleClose, handleDeleteCoupon, loading } =
    useDeleteCouponModal();

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
      <DialogTitle id="alert-dialog-title">حذف كوبون</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل انت متاكد من عملية حذف الكوبون؟
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: 1 }}>
        <ModalCancelButton onClick={handleClose} />
        <ModalDeleteButton onClick={handleDeleteCoupon} disabled={loading} />
      </DialogActions>
    </Dialog>
  );
}
