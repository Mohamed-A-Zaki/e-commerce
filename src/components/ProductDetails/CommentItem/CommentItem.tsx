import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function CommentItem() {
  return (
    <Box px={3} py={2} borderBottom={1} borderColor={"#ddd"}>
      <Box display={"flex"} gap={1}>
        <Typography fontWeight={"bold"}>احمد محمود</Typography>

        <Typography sx={{ display: "flex", gap: 0.5, color: "#FFC107" }}>
          <StarIcon />
          4.3
        </Typography>
      </Box>

      <Typography fontSize={14} mt={1}>
        منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
      </Typography>
    </Box>
  );
}
