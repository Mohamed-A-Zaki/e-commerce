import { Box, Grid } from "@mui/material";

export type BrandItemProps = {
  image: string;
};
export default function BrandItem({ image }: BrandItemProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Box
        component={"img"}
        src={image}
        alt=""
        width={1}
        height={150}
        borderRadius={3}
        boxShadow={1}
      />
    </Grid>
  );
}
