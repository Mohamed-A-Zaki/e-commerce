import { Container, Grid } from "@mui/material";

import Copon from "../../components/Cart/Copon/Copon";
import SectionTitle from "../../utility/SectionTitle/SectionTitle";
import CartItemList from "../../components/Cart/CartItemList/CartItemList";

export default function Cart() {
  return (
    <Container fixed sx={{ py: 2 }}>
      <SectionTitle>عربة التسوق</SectionTitle>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={8}>
          <CartItemList />
        </Grid>

        <Grid item xs={12} md={4}>
          <Copon />
        </Grid>
      </Grid>
    </Container>
  );
}
