import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useDeleteReviewModal from "../../../Hooks/Review/useDeleteReviewModal";

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
        <Button onClick={handleClose} variant="contained" color="success">
          الغاء
        </Button>
        <Button
          onClick={handleDeleteReview}
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
