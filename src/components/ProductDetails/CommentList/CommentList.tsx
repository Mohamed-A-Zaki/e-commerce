import { Box } from "@mui/material";
import CommentItem from "../CommentItem/CommentItem";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";
import Loading from "../../../utility/Loading/Loading";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import useCommentList from "../../../Hooks/Review/useCommentList";

export default function CommentList() {
  const { reviews, loading, error } = useCommentList();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (reviews.length === 0) {
    return <EmptyListMessage>لا يوجد تقييمات</EmptyListMessage>;
  }

  return (
    <Box>
      {reviews.map((review) => {
        return <CommentItem key={review._id} {...review} />;
      })}
    </Box>
  );
}
