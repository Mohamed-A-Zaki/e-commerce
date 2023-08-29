import BaseURL from "../../Api/BaseURL";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  CategoryType,
  CreateCategoryResponseType,
  GetCategoriesResponseType,
} from "../../types/Category/Category.type";

type InitialStateType = {
  categories: CategoryType[];
  specificCategoty: CategoryType | null;
  loading: boolean;
  error: string;
  number_of_pages: number;
};

const initialState: InitialStateType = {
  categories: [],
  specificCategoty: null,
  loading: true,
  error: "",
  number_of_pages: 0,
};

const token = localStorage.getItem("token");

export const getCategories = createAsyncThunk(
  "Category/getCategories",
  async (page: number) => {
    const url = `api/v1/categories?limit=18&page=${page}`;
    const { data } = await BaseURL.get<GetCategoriesResponseType>(url);
    return data;
  }
);

export const getSpescificCategory = createAsyncThunk(
  "Category/getSpescificCategory",
  async (cat_id: string) => {
    const url = `api/v1/categories/${cat_id}`;
    const { data } = await BaseURL.get<CreateCategoryResponseType>(url);
    return data;
  }
);

export const createCategory = createAsyncThunk(
  "Category/createCategory",
  async (formData: FormData) => {
    const url = "api/v1/categories";
    const { data } = await BaseURL.post<CreateCategoryResponseType>(
      url,
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
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
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(getSpescificCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpescificCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.specificCategoty = payload.data;
      })
      .addCase(getSpescificCategory.rejected, (state, { error }) => {
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
