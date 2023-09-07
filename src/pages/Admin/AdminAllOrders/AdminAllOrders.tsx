import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import AdminOrderList from "../../../components/Admin/AdminOrderList/AdminOrderList";
import { useAppSelector } from "../../../store/hooks";
import usePagination from "../../../Hooks/Pagination/usePagination";

export default function AdminAllOrders() {
  const { number_of_pages } = useAppSelector((state) => state.Order);

  usePagination(number_of_pages);

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>ادارة جميع الطلبات</SectionTitle>
      <AdminOrderList />
      <PaginationComp />
    </Stack>
  );
}
