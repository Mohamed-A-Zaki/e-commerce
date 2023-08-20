import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function RateSectionHeading() {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      <SectionTitle>التقيمات</SectionTitle>

      <Typography sx={{ display: "flex", gap: 0.5, color: "#FFC107" }}>
        <StarIcon />
        4.3
      </Typography>

      <Typography fontSize={12}>(160 تقييم)</Typography>
    </Box>
  );
}
