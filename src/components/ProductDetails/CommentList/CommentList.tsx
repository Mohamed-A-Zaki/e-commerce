import { Box } from "@mui/material";
import CommentItem from "../CommentItem/CommentItem";

export default function CommentList() {
  return (
    <Box borderTop={1} borderColor={"#ddd"}>
      {[...Array(4)].map((_e, indx) => {
        return <CommentItem key={indx} />;
      })}
    </Box>
  );
}
