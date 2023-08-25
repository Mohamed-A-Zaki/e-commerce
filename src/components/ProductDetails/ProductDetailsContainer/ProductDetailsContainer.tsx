import ProductGallery from "../ProductGallery/ProductGallery";
import ProductDetailsSection from "../ProductDetailsSection/ProductDetailsSection";

import { Container, Grid } from "@mui/material";
import { ProductType } from "../../../types/Product/Product.type";

type Props = {
  spescificProduct: ProductType | null;
};

export default function ProductDetailsContainer({ spescificProduct }: Props) {
  return (
    <Container fixed sx={{ my: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProductGallery images={spescificProduct?.images} />
        </Grid>
        <Grid item xs={12} md={8}>
          <ProductDetailsSection spescificProduct={spescificProduct}/>
        </Grid>
      </Grid>
    </Container>
  );
}
