import { Card, CardMedia, Grid } from "@mui/material";

export type BrandItemProps = {
  image: string;
};
export default function BrandItem({ image }: BrandItemProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardMedia component="img" image={image} alt="" height={150} />
      </Card>
    </Grid>
  );
}
