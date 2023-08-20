import ProductGallery from "../ProductGallery/ProductGallery";
import ProductDetailsSection from "../ProductDetailsSection/ProductDetailsSection";

import { Container, Grid } from "@mui/material";

export default function ProductDetailsContainer() {
  return (
    <Container fixed sx={{ my : 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProductGallery />
        </Grid>
        <Grid item xs={12} md={8}>
          <ProductDetailsSection />
        </Grid>
      </Grid>
    </Container>
  );
}
