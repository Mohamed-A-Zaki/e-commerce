import { createSlice } from "@reduxjs/toolkit";

export type filterProductObjectType = {
  keyword: string;
  category: string[];
  brand: string[];
  sort:
    | ""
    | "-price"
    | "+price"
    | "-sold"
    | "+sold"
    | "+ratingsQuantity"
    | "-ratingsQuantity";
};

const initialState: filterProductObjectType = {
  keyword: "",
  sort: "",
  category: [],
  brand: [],
};

const FilterProductObjectSlice = createSlice({
  name: "FilterProductObject",
  initialState,
  reducers: {
    setKeyword(state, { payload }) {
      state.keyword = payload;
    },
    setSort(state, { payload }) {
      state.sort = payload;
    },
    addCategory(state, { payload }) {
      state.category.push(payload);
    },
    removeCategory(state, { payload }) {
      state.category = state.category.filter((item) => item !== payload);
    },
    addBrand(state, { payload }) {
      state.brand.push(payload);
    },
    removeBrand(state, { payload }) {
      state.brand = state.brand.filter((item) => item !== payload);
    },
  },
});

export const {
  setKeyword,
  setSort,
  addCategory,
  removeCategory,
  addBrand,
  removeBrand,
} = FilterProductObjectSlice.actions;

export default FilterProductObjectSlice.reducer;
