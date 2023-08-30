import {
  openDeleteReviewModal,
  setReviewId,
} from "../../store/DeleteReviewModalSlice/DeleteReviewModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useCommentItem = (id: string) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.Auth);

  const handleDeleteButton = () => {
    dispatch(openDeleteReviewModal());
    dispatch(setReviewId(id));
  };

  return { handleDeleteButton, auth };
};

export default useCommentItem;
