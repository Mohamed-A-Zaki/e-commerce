import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/Product/Product.type";
import BaseURL from "../../Api/BaseURL";
import { GetWishListResponseType } from "../../types/WishList/WishList";

type InitialState = {
  wishList: ProductType[];
  wish_list_ids: string[];
  loading : boolean;
  error : string;
};

const initialState: InitialState = {
  wishList: [],
  wish_list_ids: [],
  loading : false,
  error : ""
};

export const getWishList = createAsyncThunk(
  "WishList/getWishList",
  async () => {
    const token = localStorage.getItem("token");
    const url = "api/v1/wishlist";
    const { data } = await BaseURL.get<GetWishListResponseType>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const addToWishList = createAsyncThunk(
  "WishList/addToWishList",
  async (prod_id: string) => {
    const url = "api/v1/wishlist";
    const token = localStorage.getItem("token");
    await BaseURL.post(
      url,
      { productId: prod_id },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return prod_id;
  }
);

export const removeFromWishList = createAsyncThunk(
  "WishList/removeFromWishList",
  async (prod_id: string) => {
    const url = `api/v1/wishlist/${prod_id}`;
    const token = localStorage.getItem("token");
    await BaseURL.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return prod_id;
  }
);

const WishListSlice = createSlice({
  name: "WishList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getWishList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWishList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.wishList = payload;
        state.wish_list_ids = payload.map((item) => item._id);
      })
      .addCase(getWishList.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      .addCase(addToWishList.fulfilled, (state, { payload }) => {
        state.wish_list_ids.push(payload);
      })
      .addCase(removeFromWishList.fulfilled, (state, { payload }) => {
        state.wishList = state.wishList.filter((item) => item._id !== payload);
        state.wish_list_ids = state.wish_list_ids.filter(
          (item) => item !== payload
        );
      });
  },
});

// export const {} = WishList.actions

export default WishListSlice.reducer;
