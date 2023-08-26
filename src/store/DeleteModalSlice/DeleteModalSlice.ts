import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  productId: "",
};

const DeleteModalSlice = createSlice({
  name: "DeleteModal",
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

export const { openModal, closeModal, setProductId } = DeleteModalSlice.actions;

export default DeleteModalSlice.reducer;
