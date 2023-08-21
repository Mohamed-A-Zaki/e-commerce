import { Box, Container } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PaymentMethodList from "../../../components/PaymentMethod/PaymentMethodList/PaymentMethodList";
import PriceButton from "../../../utility/PriceButton/PriceButton";
import MainButton from "../../../utility/MainButton/MainButton";


export default function PaymentMethod() {
  return (
    <Container fixed sx={{ my: 3, height: "66vh" }}>
      <SectionTitle>اختر طريقة الدفع</SectionTitle>

      <PaymentMethodList />

      <Box display={"flex"} gap={1} justifyContent={"end"}>
        <PriceButton>34000</PriceButton>
        <MainButton>اتمام الشراء</MainButton>
      </Box>
    </Container>
  );
}
