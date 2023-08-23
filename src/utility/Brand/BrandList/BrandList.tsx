import { Grid } from "@mui/material";
import BrandItem from "../BrandItem/BrandItem";
import { useAppSelector } from "../../../store/hooks";

import Loading from "../../Loading/Loading";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../EmptyListMessage/EmptyListMessage";

type BrandListProps = {
  count?: number;
};
export default function BrandList({ count }: BrandListProps) {
  const { brands, loading, error } = useAppSelector((state) => state.Brands);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (brands.length === 0) {
    return <EmptyListMessage>لا يوجد أي ماركات حاليا...</EmptyListMessage>;
  }

  return (
    <Grid container spacing={1}>
      {brands.slice(0, count).map((brand) => {
        return (
          <Grid item key={brand._id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <BrandItem {...brand} />
          </Grid>
        );
      })}
    </Grid>
  );
}
