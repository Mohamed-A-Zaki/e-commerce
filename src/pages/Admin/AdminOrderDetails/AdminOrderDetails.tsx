import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import CartItemList from "../../../components/Cart/CartItemList/CartItemList";
import OrderClientDetails from "../../../components/Admin/OrderClientDetails/OrderClientDetails";

export default function AdminOrderDetails() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>تفاصيل الطلب رقم#55</SectionTitle>
      <CartItemList />
      <OrderClientDetails />
    </Stack>
  );
}
