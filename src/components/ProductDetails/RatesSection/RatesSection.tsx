import { Card, Container } from "@mui/material";

import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";
import RateSectionHeading from "../RateSectionHeading/RateSectionHeading";
// import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
// import usePagination from "../../../Hooks/Pagination/usePagination";
// import { useAppSelector } from "../../../store/hooks";
import DeleteReviewModal from "../../../utility/DeleteReviewModal/DeleteReviewModal";
import EditReviewModal from "../../../utility/EditReviewModal/EditReviewModal";

export default function RatesSection() {
  // const { number_of_pages } = useAppSelector((state) => state.Categories);
  // usePagination(number_of_pages);

  return (
    <Container>
      <Card sx={{ my: 2, p: 2 }}>
        <RateSectionHeading />
        <AddComment />
        <CommentList />
        {/* <PaginationComp /> */}
      </Card>
      <DeleteReviewModal />
      <EditReviewModal />
    </Container>
  );
}
