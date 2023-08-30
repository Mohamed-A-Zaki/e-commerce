import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useDeleteReviewModal from "../../Hooks/Review/useDeleteReviewModal";

export default function DeleteReviewModal() {
  const { open, handleClose, handleDeleteReview } = useDeleteReviewModal();

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
          هل انت متاكد من عملية حذف التقييم؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>الغاء</Button>
        <Button onClick={handleDeleteReview} autoFocus>
          حذف
        </Button>
      </DialogActions>
    </Dialog>
  );
}
