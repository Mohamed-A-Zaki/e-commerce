import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import ProductList from "../../../utility/Product/ProductList/ProductList";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";

export default function UserFavourite() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>قائمة المفضلة</SectionTitle>
      <ProductList />
      <ProductList />
      <PaginationComp />
    </Stack>
  );
}
