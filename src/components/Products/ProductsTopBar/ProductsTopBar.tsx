import { Container } from "@mui/material";

import DropdowmMenu from "../DropdowmMenu/DropdowmMenu";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import { useAppSelector } from "../../../store/hooks";

export default function ProductsTopBar() {
  const { products } = useAppSelector((state) => state.Products);

  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <SectionTitle>{products?.length} نتجية بحث</SectionTitle>
      <DropdowmMenu />
    </Container>
  );
}
