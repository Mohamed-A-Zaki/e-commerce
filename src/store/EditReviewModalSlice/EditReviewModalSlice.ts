import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  reviewId: "",
};

const EditReviewModalSlice = createSlice({
  name: "EditReviewModal",
  initialState,
  reducers: {
    openEditReviewModal: (state) => {
      state.open = true;
    },
    closeEditReviewModal: (state) => {
      state.open = false;
    },
    setEditReviewId: (state, { payload }) => {
      state.reviewId = payload;
    },
  },
});

export const { openEditReviewModal, closeEditReviewModal, setEditReviewId } =
  EditReviewModalSlice.actions;

export default EditReviewModalSlice.reducer;
