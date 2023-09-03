import StarIcon from "@mui/icons-material/Star";
import { Box, Stack, Typography } from "@mui/material";

import { ReviewType } from "../../../types/Rating/Rating";
import useCommentItem from "../../../Hooks/Review/useCommentItem";

import EditButton from "../../../utility/EditButton/EditButton";
import DeleteButton from "../../../utility/DeleteButton/DeleteButton";
import DeleteEditBtnscontainer from "../../../utility/DeleteEditBtnscontainer/DeleteEditBtnscontainer";

export default function CommentItem({ user, review, rating, _id }: ReviewType) {
  const { auth, handleDeleteButton, handleEditButton } = useCommentItem(_id);

  return (
    <Box
      px={3}
      py={2}
      boxShadow={3}
      my={1.5}
      borderRadius={1.5}
      position={"relative"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} gap={1}>
          <Typography fontWeight={"bold"}>
            {typeof user === "string" ? auth.user.name : user.name}
          </Typography>

          <Typography sx={{ display: "flex", gap: 0.5, color: "#FFC107" }}>
            <StarIcon />
            {rating}
          </Typography>
        </Box>
      </Stack>

      {(typeof user === "string" ? user : user._id) === auth.user._id && (
        <DeleteEditBtnscontainer>
          <EditButton onClick={handleEditButton} />
          <DeleteButton onClick={handleDeleteButton} />
        </DeleteEditBtnscontainer>
      )}

      <Typography fontSize={14} mt={1}>
        {/* منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة */}
        {review}
      </Typography>
    </Box>
  );
}
