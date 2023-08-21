import { Container } from "@mui/material";
import CategoryNavbar from "../../../utility/Category/CategoryNavbar/CategoryNavbar";
import ProductsTopBar from "../../../components/Products/ProductsTopBar/ProductsTopBar";
import ProductsSidebar from "../../../components/Products/ProductsSidebar/ProductsSidebar";
import ProductList from "../../../utility/Product/ProductList/ProductList";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";


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
