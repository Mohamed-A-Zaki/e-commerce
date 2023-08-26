import { useEffect } from "react";
import { Stack } from "@mui/material";
import usePagination from "../../../Hooks/usePagination";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getProducts } from "../../../store/ProductSlice/ProductSlice";
import AdminProductList from "../../../components/Admin/AdminProductList/AdminProductList";

export default function AdminAllProducts() {
  const dispatch = useAppDispatch();
  const { products, number_of_pages } = useAppSelector(
    (state) => state.Products
  );

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  usePagination(number_of_pages);

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>ادارة جميع المنتجات</SectionTitle>
      <AdminProductList products={products} />
      <PaginationComp />
    </Stack>
  );
}
