import { Grid } from "@mui/material";

import Copon from "../Copon/Copon";
import CartItemList from "../CartItemList/CartItemList";

export default function CartLayout() {
  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={12} md={8}>
        <CartItemList />
      </Grid>
      <Grid item xs={12} md={4}>
        <Copon />
      </Grid>
    </Grid>
  );
}
