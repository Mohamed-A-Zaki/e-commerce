import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  reviewId: "",
};

const DeleteProductModalSlice = createSlice({
  name: "DeleteProductModal",
  initialState,
  reducers: {
    openDeleteReviewModal: (state) => {
      state.open = true;
    },
    closeDeleteReviewModal: (state) => {
      state.open = false;
    },
    setReviewId: (state, { payload }) => {
      state.reviewId = payload;
    },
  },
});

export const { openDeleteReviewModal, closeDeleteReviewModal, setReviewId } =
  DeleteProductModalSlice.actions;

export default DeleteProductModalSlice.reducer;
