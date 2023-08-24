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
      values
    );
    return data.data;
  }
);

const SubCategorySlice = createSlice({
  name: "SubCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(createSubCategory.fulfilled, (state, { payload }) => {
      // console.log(payload);
      // })
      .addCase(getSubCategory.fulfilled, (state, { payload }) => {
        state.subCategories = payload;
        // console.log(payload);
      });
  },
});

// export const {} = SubCategorySlice.actions

export default SubCategorySlice.reducer;
