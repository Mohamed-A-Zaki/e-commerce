import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import { useAppSelector } from "../../../store/hooks";

export default function RateSectionHeading() {
  const { spescificProduct } = useAppSelector((state) => state.Products);

  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      <SectionTitle>التقيمات</SectionTitle>

      <Typography sx={{ display: "flex", gap: 0.5, color: "#FFC107" }}>
        <StarIcon />
        {spescificProduct?.ratingsAverage}
      </Typography>

      <Typography fontSize={12}>
        ({spescificProduct?.ratingsQuantity} تقييم)
      </Typography>
    </Box>
  );
}
