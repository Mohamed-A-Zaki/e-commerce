import { Card, CardMedia } from "@mui/material";

export type BrandItemProps = {
  image: string;
};
export default function BrandItem({ image }: BrandItemProps) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardMedia component="img" image={image} alt="" height={150} />
    </Card>
  );
}
