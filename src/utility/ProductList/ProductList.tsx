import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  return (
    <Grid container spacing={1}>
      {[...Array(4)].map((_, indx) => {
        return <ProductCard key={indx} />;
      })}
    </Grid>
  );
}
