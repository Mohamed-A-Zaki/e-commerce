import { Container } from "@mui/material";
import ProductsTopBar from "../../components/Products/ProductsTopBar/ProductsTopBar";
import CategoryNavbar from "../../utility/CategoryNavbar/CategoryNavbar";
import ProductsSidebar from "../../components/Products/ProductsSidebar/ProductsSidebar";
import PaginationComp from "../../utility/PaginationComp/PaginationComp";
import ProductList from "../../utility/ProductList/ProductList";

export default function Products() {
  return (
    <>
      <CategoryNavbar />
      <ProductsTopBar />

      <Container sx={{ display: "flex", gap: 3 }}>
        <ProductsSidebar />
        <ProductList />
      </Container>

      <PaginationComp />
    </>
  );
}
