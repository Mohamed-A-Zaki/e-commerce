import { ReviewType } from "../../../types/Rating/Rating";
import useCommentItem from "../../../Hooks/Review/useCommentItem";
import { Box, IconButton, Stack, Typography } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CommentItem({ user, review, rating, _id }: ReviewType) {
  const { auth, handleDeleteButton, handleEditButton } = useCommentItem(_id);

  return (
    <Box
      px={3}
      py={2}
      boxShadow={3}
      my={1.5}
      borderRadius={1.5}
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

        {(typeof user === "string" ? user : user._id) === auth.user._id && (
          <Box>
            <IconButton
              color="secondary"
              aria-label="edit"
              size="small"
              onClick={handleEditButton}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              color="error"
              aria-label="delete"
              size="small"
              onClick={handleDeleteButton}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Stack>

      <Typography fontSize={14} mt={1}>
        {/* منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة */}
        {review}
      </Typography>
    </Box>
  );
}
