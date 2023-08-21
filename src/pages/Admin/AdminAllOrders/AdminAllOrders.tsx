import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import AdminOrderList from "../../../components/Admin/AdminOrderList/AdminOrderList";

export default function AdminAllOrders() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>ادارة جميع الطلبات</SectionTitle>
      <AdminOrderList />
      <PaginationComp />
    </Stack>
  );
}
