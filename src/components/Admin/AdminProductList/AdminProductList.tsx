import { Grid } from "@mui/material";
import AdminProductCard from "../AdminProductCard/AdminProductCard";

export default function AdminProductList() {
  return (
    <Grid container spacing={1}>
      {[...Array(6)].map((_, indx) => {
        return <AdminProductCard key={indx} />;
      })}
    </Grid>
  );
}
