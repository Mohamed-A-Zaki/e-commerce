import { Grid } from "@mui/material";
// import ProductCard from "../../../utility/Product/ProductCard/ProductCard";

export default function UserFavoriteList() {
  return (
    <Grid container spacing={1}>
      {[...Array(6)].map((_, indx) => {
        return (
          <Grid item key={indx} xs={12} md={6} lg={4}>
            {/* <ProductCard  /> */}
          </Grid>
        );
      })}
    </Grid>
  );
}
