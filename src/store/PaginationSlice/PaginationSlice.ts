import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../CategorySlice/CategorySlice";

type InitialStateType = {
  page: number;
  number_of_pages: number;
};

const initialState: InitialStateType = {
  page: 1,
  number_of_pages: 0,
};

const PaginationSlice = createSlice({
  name: "Pagination",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.number_of_pages = payload.paginationResult.numberOfPages;
      // console.log(payload.paginationResult.numberOfPages);
    });
  },
});

export const { setPage } = PaginationSlice.actions;

export default PaginationSlice.reducer;
