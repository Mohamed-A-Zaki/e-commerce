import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const ClearCartModalSlice = createSlice({
  name: "ClearCartModal",
  initialState,
  reducers: {
    openClearCartModal(state) {
      state.open = true;
    },
    closeClearCartModal(state) {
      state.open = false;
    },
  },
});

export const { openClearCartModal, closeClearCartModal } =
  ClearCartModalSlice.actions;

export default ClearCartModalSlice.reducer;
