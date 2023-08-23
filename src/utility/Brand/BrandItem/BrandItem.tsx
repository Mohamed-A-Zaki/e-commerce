import { Card, CardMedia } from "@mui/material";
import { BrandType } from "../../../types/Brand/Brand.type";

export default function BrandItem({ image }: BrandType) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardMedia component="img" image={image} alt="" height={150} />
    </Card>
  );
}
