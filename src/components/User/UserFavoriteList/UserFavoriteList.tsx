import { useEffect } from "react";
import { Grid } from "@mui/material";

import { getWishList } from "../../../store/WishList/WishListSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ProductCard from "../../../utility/Product/ProductCard/ProductCard";
import Loading from "../../../utility/Loading/Loading";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";

export default function UserFavoriteList() {
  const dispatch = useAppDispatch();
  const { wishList, loading, error } = useAppSelector(
    (state) => state.WishList
  );

  useEffect(() => {
    dispatch(getWishList());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (wishList.length === 0) {
    return (
      <EmptyListMessage>لا يوجد أي منتجات مفضلة حاليا...</EmptyListMessage>
    );
  }

  return (
    <Grid container spacing={1}>
      {wishList.map((ele) => {
        const imageCover = `https://e-commerce-backend-b89n.onrender.com/products/${ele.imageCover}`;
        return (
          <Grid item key={ele._id} xs={12} md={6} lg={4}>
            <ProductCard {...{ ...ele, imageCover }} />
          </Grid>
        );
      })}
    </Grid>
  );
}
