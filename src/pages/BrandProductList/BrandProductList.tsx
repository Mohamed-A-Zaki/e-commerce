import { useEffect } from "react";
import { getBrandProducts } from "../../store/products/ProductSlice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import usePagination from "../../Hooks/Pagination/usePagination";
import { Box, Container } from "@mui/material";
import ProductList from "../../utility/Product/ProductList/ProductList";
import PaginationComp from "../../utility/PaginationComp/PaginationComp";
import SectionTitle from "../../utility/SectionTitle/SectionTitle";

export default function BrandProductList() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.Pagination);
  const { brabd_products, number_of_pages, results_count } = useAppSelector(
    (state) => state.Products
  );

  usePagination(number_of_pages);

  useEffect(() => {
    dispatch(getBrandProducts({ brand_id: id as string, page: page }));
  }, [dispatch, id, page]);

  return (
    <Container sx={{ my: 3, minHeight: "66vh" }}>
      <Box my={2}>
        <SectionTitle>{results_count} نتجية بحث</SectionTitle>
      </Box>

      <ProductList products={brabd_products} />
      <PaginationComp />
    </Container>
  );
}
