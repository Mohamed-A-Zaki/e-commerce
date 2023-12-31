import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../Api/BaseURL";
import {
  CreateSubCategoryResponseType,
  GetSubCategoryResponseType,
  SubCategoryType,
} from "../../types/SubCategory/SubCategory.type";

type InitialStateType = {
  subCategories: SubCategoryType[];
};

const initialState: InitialStateType = {
  subCategories: [],
};

const token = localStorage.getItem("token");

export const getSubCategory = createAsyncThunk(
  "SubCategory/getSubCategory",
  async (cat_id: string) => {
    const url = `api/v1/categories/${cat_id}/subcategories`;
    const { data } = await BaseURL.get<GetSubCategoryResponseType>(url);
    return data.data;
  }
);

export const createSubCategory = createAsyncThunk(
  "SubCategory/createSubCategory",
  async (values: { name: string; category: string }) => {
    const url = "api/v1/subcategories";
    const { data } = await BaseURL.post<CreateSubCategoryResponseType>(
      url,
      values,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  }
);

const SubCategorySlice = createSlice({
  name: "SubCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubCategory.fulfilled, (state, { payload }) => {
      state.subCategories = payload;
    });
  },
});

// export const {} = SubCategorySlice.actions

export default SubCategorySlice.reducer;
