import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../Api/BaseURL";
import {
  BrandType,
  CreateBrandResponseType,
  GetBrandResponseType,
} from "../../types/Brand/Brand.type";

type InitialStateType = {
  brands: BrandType[];
  specificBrand: BrandType | null;
  loading: boolean;
  error: string;
  number_of_pages: number;
};

const initialState: InitialStateType = {
  brands: [],
  specificBrand: null,
  loading: true,
  error: "",
  number_of_pages: 0,
};

export const getBrands = createAsyncThunk(
  "Brand/getBrands",
  async (page: number) => {
    const url = `api/v1/brands?limit=18&page=${page}`;
    const { data } = await BaseURL.get<GetBrandResponseType>(url);
    return data;
  }
);

export const getSpescificBrand = createAsyncThunk(
  "Category/getSpescificBrand",
  async (brand_id: string) => {
    const url = `api/v1/brands/${brand_id}`;
    const { data } = await BaseURL.get<CreateBrandResponseType>(url);
    return data;
  }
);

export const createBrand = createAsyncThunk(
  "Category/createBrand",
  async (formData: FormData) => {
    const url = "api/v1/brands";
    const { data } = await BaseURL.post<CreateBrandResponseType>(url, formData);
    return data.data;
  }
);

const BrandSlice = createSlice({
  name: "Brand",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.brands = payload.data;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getBrands.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(getSpescificBrand.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpescificBrand.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.specificBrand = payload.data;
      })
      .addCase(getSpescificBrand.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(createBrand.fulfilled, (state, { payload }) => {
        state.brands.unshift(payload);
      });
  },
});

// export const {} = BrandSlice.actions

export default BrandSlice.reducer;
