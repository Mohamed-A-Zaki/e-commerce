import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteReview } from "../../store/RatingSlice/RatingSlice";
import {
  closeDeleteReviewModal,
  setDeleteReviewId,
} from "../../store/DeleteReviewModalSlice/DeleteReviewModalSlice";
import { useState } from "react";

const useDeleteReviewModal = () => {
  const dispatch = useAppDispatch();
  const { open, reviewId } = useAppSelector((state) => state.DeleteReview);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    dispatch(closeDeleteReviewModal());
    dispatch(setDeleteReviewId(""));
  };

  const handleDeleteReview = () => {
    setLoading(true);
    dispatch(deleteReview(reviewId))
      .unwrap()
      .then(() => {
        toast.success("تم الحذف بنجاح");
        handleClose();
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { open, handleClose, handleDeleteReview, loading };
};

export default useDeleteReviewModal;
