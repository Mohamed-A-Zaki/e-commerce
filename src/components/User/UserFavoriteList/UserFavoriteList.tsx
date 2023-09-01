import { useEffect } from "react";
import { Grid } from "@mui/material";

import { getWishList } from "../../../store/WishList/WishListSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ProductCard from "../../../utility/Product/ProductCard/ProductCard";

export default function UserFavoriteList() {
  const dispatch = useAppDispatch();
  const { wishList } = useAppSelector((state) => state.WishList);

  useEffect(() => {
    dispatch(getWishList());
  }, [dispatch]);

  return (
    <Grid container spacing={1}>
      {wishList.map((ele) => {
        const imageCover = `http://127.0.0.1:8000/products/${ele.imageCover}`;
        return (
          <Grid item key={ele._id} xs={12} md={6} lg={4}>
            <ProductCard {...{ ...ele, imageCover }} />
          </Grid>
        );
      })}
    </Grid>
  );
}
