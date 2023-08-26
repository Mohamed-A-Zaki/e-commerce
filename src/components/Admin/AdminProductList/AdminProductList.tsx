import { Grid } from "@mui/material";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import { useAppSelector } from "../../../store/hooks";
import Loading from "../../../utility/Loading/Loading";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";
import { ProductType } from "../../../types/Product/Product.type";

type Props = {
  products: ProductType[];
};
export default function AdminProductList({ products }: Props) {
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
          <Grid item key={product._id} xs={12} md={6} lg={4}>
            <AdminProductCard {...product}/>
          </Grid>
        );
      })}
    </Grid>
  );
}
