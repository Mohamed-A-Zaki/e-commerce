import { Grid } from "@mui/material";
import AdminProductCard from "../AdminProductCard/AdminProductCard";

export default function AdminProductList() {
  return (
    <Grid container spacing={1}>
      {[...Array(6)].map((_, indx) => {
        return (
          <Grid item key={indx} xs={12} md={6} lg={4}>
            <AdminProductCard />
          </Grid>
        );
      })}
    </Grid>
  );
}