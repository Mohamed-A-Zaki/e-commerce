import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useAppSelector } from "../../../store/hooks";
import Loading from "../../Loading/Loading";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../EmptyListMessage/EmptyListMessage";
import { ProductType } from "../../../types/Product/Product.type";

type Props = {
  products: ProductType[];
};

export default function ProductList({ products }: Props) {
  const { loading, error } = useAppSelector((state) => state.Products);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (products.length === 0) {
    return <EmptyListMessage>لا يوجد أي تصنيفات حاليا...</EmptyListMessage>;
  }

  return (
    <Grid container spacing={1}>
      {products.map((product) => {
        return (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard {...product} />
          </Grid>
        );
      })}
    </Grid>
  );
}
