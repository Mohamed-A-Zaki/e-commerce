import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  return (
    <Grid container spacing={1}>
      {[...Array(4)].map((_, indx) => {
        return (
          <Grid item key={indx} xs={12} sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid>
        );
      })}
    </Grid>
  );
}
