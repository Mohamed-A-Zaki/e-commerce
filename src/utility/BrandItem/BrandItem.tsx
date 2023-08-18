import { Box, Grid } from "@mui/material";

export type BrandItemProps = {
  image: string;
};
export default function BrandItem({ image }: BrandItemProps) {
  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Box
        component={"img"}
        src={image}
        alt=""
        width={1}
        borderRadius={2}
        boxShadow={1}
      />
    </Grid>
  );
}
