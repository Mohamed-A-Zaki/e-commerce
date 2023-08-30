import { Box } from "@mui/material";
import CommentItem from "../CommentItem/CommentItem";
import { useAppSelector } from "../../../store/hooks";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";

export default function CommentList() {
  const { spescificProduct } = useAppSelector((state) => state.Products);

  if (spescificProduct?.reviews.length === 0) {
    return <EmptyListMessage>لا يوجد تقييمات</EmptyListMessage>;
  }

  return (
    <Box borderTop={1} borderColor={"#ddd"}>
      {spescificProduct?.reviews.map((review) => {
        return <CommentItem key={review._id} {...review} />;
      })}
    </Box>
  );
}
