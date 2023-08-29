import { Container } from "@mui/material";
import CategoryNavbar from "../../../utility/Category/CategoryNavbar/CategoryNavbar";
import ProductsTopBar from "../../../components/Products/ProductsTopBar/ProductsTopBar";
import ProductsSidebar from "../../../components/Products/ProductsSidebar/ProductsSidebar";
import ProductList from "../../../utility/Product/ProductList/ProductList";
import PaginationComp from "../../../utility/PaginationComp/PaginationComp";
import useProductsPage from "../../../Hooks/Product/useProductsPage";

export default function Products() {
  const products = useProductsPage();

  return (
    <>
      <CategoryNavbar />
      <ProductsTopBar />

      <Container sx={{ display: "flex", gap: 3 }}>
        <ProductsSidebar />
        <ProductList products={products} />
      </Container>

      <PaginationComp />
    </>
  );
}
