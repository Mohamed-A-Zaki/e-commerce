import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteReview } from "../../store/RatingSlice/RatingSlice";
import {
  closeDeleteReviewModal,
  setReviewId,
} from "../../store/DeleteReviewModalSlice/DeleteReviewModalSlice";

const useDeleteReviewModal = () => {
  const dispatch = useAppDispatch();
  const { open, reviewId } = useAppSelector((state) => state.DeleteReview);

  const handleClose = () => {
    dispatch(closeDeleteReviewModal());
    dispatch(setReviewId(""));
  };

  const handleDeleteReview = () => {
    dispatch(deleteReview(reviewId))
      .unwrap()
      .then(() => {
        toast.success("تم الحذف بنجاح");
        handleClose();
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      });
  };

  return { open, handleClose, handleDeleteReview };
};

export default useDeleteReviewModal;
