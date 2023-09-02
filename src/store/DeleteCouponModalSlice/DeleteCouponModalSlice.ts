import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  couponID: "",
};

const DeleteCouponModalSlice = createSlice({
  name: "DeleteCouponModal",
  initialState,
  reducers: {
    openDeleteCouponModal(state) {
      state.open = true;
    },
    closeDeleteCouponModal(state) {
      state.open = false;
    },
    setDeleteCouponID(state, { payload }) {
      state.couponID = payload;
    },
  },
});

export const { closeDeleteCouponModal, openDeleteCouponModal, setDeleteCouponID } =
  DeleteCouponModalSlice.actions;

export default DeleteCouponModalSlice.reducer;
