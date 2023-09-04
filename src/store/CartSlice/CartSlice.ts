import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddProductToCartParamsType,
  CartProductType,
  GetCartProductsResponseType,
} from "../../types/Cart/Cart.type";
import BaseURL from "../../Api/BaseURL";

type InitialState = {
  cart_products: CartProductType[];
  loading: boolean;
  error: string;
  total_price: number;
};

const initialState: InitialState = {
  cart_products: [],
  loading: false,
  error: "",
  total_price: 0,
};

export const getCartProducts = createAsyncThunk(
  "cart/getCartProducts",
  async () => {
    const url = "/api/v1/cart";
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.get<GetCartProductsResponseType>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (values: AddProductToCartParamsType) => {
    const url = "api/v1/cart";
    const token = localStorage.getItem("token");
    await BaseURL.post(url, values, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return;
  }
);

export const deleteProductFromCart = createAsyncThunk(
  "cart/deleteProductFromCart",
  async (id: string) => {
    const url = `api/v1/cart/${id}`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.delete<GetCartProductsResponseType>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCartProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cart_products = payload.data.products;
        state.total_price = payload.data.totalCartPrice;
      })
      .addCase(getCartProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(addProductToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addProductToCart.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteProductFromCart.fulfilled, (state, { payload }) => {
        state.cart_products = payload.data.products;
        state.total_price = payload.data.totalCartPrice;
      });
  },
});

// export const {} = CartSlice.actions;

export default CartSlice.reducer;
