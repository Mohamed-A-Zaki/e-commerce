import { ReviewType } from "../../../types/Rating/Rating";
import useCommentItem from "../../../Hooks/Review/useCommentItem";
import { Box, Button, Stack, Typography } from "@mui/material";

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
        <Box position={"absolute"} top={10} left={10} display={"flex"} gap={1}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={handleEditButton}
            sx={{ flexDirection: "row-reverse" }}
          >
            تعديل
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
            aria-label="delete"
            size="small"
            onClick={handleDeleteButton}
            sx={{ flexDirection: "row-reverse" }}
          >
            حذف
          </Button>
        </Box>
      )}

      <Typography fontSize={14} mt={1}>
        {/* منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة */}
        {review}
      </Typography>
    </Box>
  );
}
