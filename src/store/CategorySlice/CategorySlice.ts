import BaseURL from "../../Api/BaseURL";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  CategoryType,
  CreateCategoryResponseType,
  GetCategoriesResponseType,
} from "../../types/Category/Category.type";

type InitialStateType = {
  categories: CategoryType[];
  loading: boolean;
  error: string;
};

const initialState: InitialStateType = {
  categories: [],
  loading: true,
  error: "",
};

export const getCategories = createAsyncThunk(
  "Category/getCategories",
  async (page: number) => {
    const url = `api/v1/categories?limit=3&page=${page}`;
    const { data } = await BaseURL.get<GetCategoriesResponseType>(url);
    return data;
  }
);

export const createCategory = createAsyncThunk(
  "Category/createCategory",
  async (formData: FormData) => {
    const url = "api/v1/categories";
    const { data } = await BaseURL.post<CreateCategoryResponseType>(
      url,
      formData
    );
    return data.data;
  }
);

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.data;
      })
      .addCase(getCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(createCategory.fulfilled, (state, { payload }) => {
        state.categories.unshift(payload);
      });
  },
});

// export const {} = CategorySlice.actions

export default CategorySlice.reducer;
