import {
  openDeleteReviewModal,
  setDeleteReviewId,
} from "../../store/DeleteReviewModalSlice/DeleteReviewModalSlice";
import {
  openEditReviewModal,
  setEditReviewId,
} from "../../store/EditReviewModalSlice/EditReviewModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useCommentItem = (id: string) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.Auth);

  const handleDeleteButton = () => {
    dispatch(openDeleteReviewModal());
    dispatch(setDeleteReviewId(id));
  };

  const handleEditButton = () => {
    dispatch(openEditReviewModal());
    dispatch(setEditReviewId(id));
  };

  return { handleDeleteButton, handleEditButton, auth };
};

export default useCommentItem;
