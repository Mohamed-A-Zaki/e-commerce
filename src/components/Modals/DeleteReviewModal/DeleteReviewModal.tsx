import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useDeleteReviewModal from "../../../Hooks/Review/useDeleteReviewModal";
import ModalCancelButton from "../../../utility/Modal/ModalCancelButton/ModalCancelButton";
import ModalDeleteButton from "../../../utility/Modal/ModalDeleteButton/ModalDeleteButton";

export default function DeleteReviewModal() {
  const { open, handleClose, handleDeleteReview, loading } =
    useDeleteReviewModal();

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
      <DialogTitle id="alert-dialog-title">حذف تقييم</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل انت متاكد من عملية حذف التقييم؟
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: 1 }}>
        <ModalCancelButton onClick={handleClose} />
        <ModalDeleteButton onClick={handleDeleteReview} disabled={loading} />
      </DialogActions>
    </Dialog>
  );
}
