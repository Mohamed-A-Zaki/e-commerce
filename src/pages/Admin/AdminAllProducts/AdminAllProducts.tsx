import {  Stack } from "@mui/material";
import AdminProductList from "../../../components/Admin/AdminProductList/AdminProductList";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";

export default function AdminAllProducts() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>ادارة جميع المنتجات</SectionTitle>
      <AdminProductList />
      <PaginationComp />
    </Stack>
  );
}
