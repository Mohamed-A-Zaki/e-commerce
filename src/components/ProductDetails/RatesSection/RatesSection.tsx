import { Card, Container } from "@mui/material";

import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";
import RateSectionHeading from "../RateSectionHeading/RateSectionHeading";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";

export default function RatesSection() {
  return (
    <Container>
      <Card sx={{ my: 2, p: 2 }}>
        <RateSectionHeading />
        <AddComment />
        <CommentList />
        <PaginationComp />
      </Card>
    </Container>
  );
}
