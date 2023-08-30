import { Stack } from "@mui/material";

import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import AdminProductList from "../../../components/Admin/AdminProductList/AdminProductList";
import DeleteProductModal from "../../../utility/DeleteProductModal/DeleteProductModal";
import useAdminAllProducts from "../../../Hooks/Product/useAdminAllProducts";

export default function AdminAllProducts() {
  const products = useAdminAllProducts();

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>ادارة جميع المنتجات</SectionTitle>
      <AdminProductList products={products} />
      <PaginationComp />
      <DeleteProductModal />
    </Stack>
  );
}
