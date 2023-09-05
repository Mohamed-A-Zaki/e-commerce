import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddProductToCartParamsType,
  CartProductType,
  GetCartProductsResponseType,
  UpdateQuantityParamsType,
} from "../../types/Cart/Cart.type";
import BaseURL from "../../Api/BaseURL";

type InitialState = {
  cart_products: CartProductType[];
  loading: boolean;
  error: string;
  total_price: number;
  numOfCartItems: number;
};

const initialState: InitialState = {
  cart_products: [],
  loading: false,
  error: "",
  total_price: 0,
  numOfCartItems: 0,
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
    const { data } = await BaseURL.post<GetCartProductsResponseType>(
      url,
      values,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
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

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ values, productId }: UpdateQuantityParamsType) => {
    const url = `api/v1/cart/${productId}`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.put<GetCartProductsResponseType>(
      url,
      values,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  }
);

export const clearCart = createAsyncThunk("cart/clearCart", async () => {
  const url = "api/v1/cart";
  const token = localStorage.getItem("token");
  await BaseURL.delete(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return;
});

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
        state.numOfCartItems = payload.numOfCartItems;
      })
      .addCase(getCartProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(addProductToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.numOfCartItems = payload.numOfCartItems;
      })
      .addCase(addProductToCart.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteProductFromCart.fulfilled, (state, { payload }) => {
        state.cart_products = payload.data.products;
        state.total_price = payload.data.totalCartPrice;
        state.numOfCartItems = payload.numOfCartItems;
      })

      .addCase(updateQuantity.fulfilled, (state, { payload }) => {
        state.cart_products = payload.data.products;
        state.total_price = payload.data.totalCartPrice;
        state.numOfCartItems = payload.numOfCartItems;
      })

      .addCase(clearCart.fulfilled, (state) => {
        state.cart_products = [];
        state.total_price = 0;
        state.numOfCartItems = 0;
      });
  },
});

// export const {} = CartSlice.actions;

export default CartSlice.reducer;
