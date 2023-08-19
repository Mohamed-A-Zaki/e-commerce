import { Container } from "@mui/material";

import DropdowmMenu from "../DropdowmMenu/DropdowmMenu";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function ProductsTopBar() {
  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <SectionTitle>400 نتجية بحث</SectionTitle>
      <DropdowmMenu />
    </Container>
  );
}
