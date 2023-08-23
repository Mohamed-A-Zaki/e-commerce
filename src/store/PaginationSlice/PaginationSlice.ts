import { createSlice } from "@reduxjs/toolkit";

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
    setNumberOfPages: (state, { payload }) => {
      state.number_of_pages = payload;
    },
  },
});

export const { setPage, setNumberOfPages } = PaginationSlice.actions;

export default PaginationSlice.reducer;
