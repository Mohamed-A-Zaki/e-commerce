import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  productId: "",
};

const DeleteProductModalSlice = createSlice({
  name: "DeleteProductModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
    setProductId: (state, { payload }) => {
      state.productId = payload;
    }
  },
});

export const { openModal, closeModal, setProductId } = DeleteProductModalSlice.actions;

export default DeleteProductModalSlice.reducer;
