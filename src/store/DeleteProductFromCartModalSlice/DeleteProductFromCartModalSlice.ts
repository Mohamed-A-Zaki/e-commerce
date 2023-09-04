import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  prod_id: "",
};

const DeleteProductFromCartModalSlice = createSlice({
  name: "DeleteProductFromCartModal",
  initialState,
  reducers: {
    openDeleteProductFromCartModal(state, { payload }) {
      state.open = true;
      state.prod_id = payload;
    },
    closeDeleteProductFromCartModal(state) {
      state.open = false;
      state.prod_id = "";
    },
  },
});

export const {
  openDeleteProductFromCartModal,
  closeDeleteProductFromCartModal,
} = DeleteProductFromCartModalSlice.actions;

export default DeleteProductFromCartModalSlice.reducer;
