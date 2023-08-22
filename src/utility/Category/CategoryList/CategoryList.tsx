import { Grid } from "@mui/material";
import Loading from "../../Loading/Loading";
import { useAppSelector } from "../../../store/hooks";

import CategoryItem from "../CategoryItem/CategoryItem";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../EmptyListMessage/EmptyListMessage";

type CategoryListProps = {
  count?: number;
};
export default function CategoryList({ count }: CategoryListProps) {
  const { categories, loading, error } = useAppSelector(
    (state) => state.Categories
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (categories.length === 0) {
    return <EmptyListMessage>لا يوجد أي تصنيفات حاليا...</EmptyListMessage>;
  }

  return (
    <Grid container spacing={1}>
      {categories.slice(0, count).map((category) => {
        return (
          <Grid item key={category._id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <CategoryItem {...category} />
          </Grid>
        );
      })}
    </Grid>
  );
}
