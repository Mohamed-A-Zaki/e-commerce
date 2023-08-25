import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../Api/BaseURL";
import {
  CreateProductResponseType,
  GetProductsResponseType,
  ProductType,
} from "../../types/Product/Product.type";

type InitialStateType = {
  products: ProductType[];
  loading: boolean;
  error: string;
};

const initialState: InitialStateType = {
  products: [],
  loading: true,
  error: "",
};

export const getProducts = createAsyncThunk(
  "Product/getProducts",
  async (page: number) => {
    const url = `api/v1/products?limit=5&page=${page}`;
    const { data } = await BaseURL.get<GetProductsResponseType>(url);
    return data;
  }
);

export const createProduct = createAsyncThunk(
  "Product/createProduct",
  async (formData: FormData) => {
    const url = "api/v1/products";
    const { data } = await BaseURL.post<CreateProductResponseType>(
      url,
      formData
    );
    return data.data;
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data;
      })
      .addCase(getProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.products.unshift(payload);
      });
  },
});

// export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
