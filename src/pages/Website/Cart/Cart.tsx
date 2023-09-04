import { Container } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import CartLayout from "../../../components/Cart/CartLayout/CartLayout";
import DeleteProductFromCartModal from "../../../components/Modals/DeleteProductFromCartModal/DeleteProductFromCartModal";

export default function Cart() {
  return (
    <Container fixed sx={{ py: 2 }}>
      <SectionTitle>عربة التسوق</SectionTitle>
      <CartLayout />
      <DeleteProductFromCartModal />
    </Container>
  );
}
