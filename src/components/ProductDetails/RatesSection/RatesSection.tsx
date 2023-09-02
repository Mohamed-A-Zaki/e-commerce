import { Card, Container } from "@mui/material";
import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";
import RateSectionHeading from "../RateSectionHeading/RateSectionHeading";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import EditReviewModal from "../../Modals/EditReviewModal/EditReviewModal";
import DeleteReviewModal from "../../Modals/DeleteReviewModal/DeleteReviewModal";

export default function RatesSection() {
  return (
    <Container>
      <Card sx={{ my: 2, p: 2 }}>
        <RateSectionHeading />
        <AddComment />
        <CommentList />
        <PaginationComp />
      </Card>
      <DeleteReviewModal />
      <EditReviewModal />
    </Container>
  );
}
