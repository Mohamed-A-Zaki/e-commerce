import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../Api/BaseURL";

const initialState = {};

export const createProduct = createAsyncThunk(
  "Product/createProduct",
  async (formData: FormData) => {
    const url = "api/v1/products";
    const { data } = await BaseURL.post(url, formData);
    return data;
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
});

// export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
