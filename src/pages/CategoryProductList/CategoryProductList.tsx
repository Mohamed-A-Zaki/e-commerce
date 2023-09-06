import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCategoryProducts } from "../../store/products/ProductSlice/ProductSlice";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import ProductList from "../../utility/Product/ProductList/ProductList";
import PaginationComp from "../../utility/PaginationComp/PaginationComp";
import usePagination from "../../Hooks/Pagination/usePagination";
import SectionTitle from "../../utility/SectionTitle/SectionTitle";

export default function CategoryProductList() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { cat_products, number_of_pages, results_count } = useAppSelector(
    (state) => state.Products
    );
    
    usePagination(number_of_pages);
    const { page } = useAppSelector((state) => state.Pagination);

  useEffect(() => {
    dispatch(getCategoryProducts({ cat_id: id as string, page: page }));
  }, [dispatch, id, page]);

  return (
    <Container sx={{ my: 3, minHeight: "66vh" }}>
      <Box my={2}>
        <SectionTitle>{results_count} نتجية بحث</SectionTitle>
      </Box>

      <ProductList products={cat_products} />

      <PaginationComp />
    </Container>
  );
}
