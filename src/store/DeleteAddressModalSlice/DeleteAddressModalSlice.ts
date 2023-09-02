import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  addressID: "",
};

const DeleteAddressModalSlice = createSlice({
  name: "DeleteAddressModal",
  initialState,
  reducers: {
    openDeleteAddressModal: (state, action) => {
      state.open = true;
      state.addressID = action.payload;
    },
    closeDeleteAddressModal: (state) => {
      state.open = false;
      state.addressID = "";
    },
  },
});

export const { closeDeleteAddressModal, openDeleteAddressModal } =
  DeleteAddressModalSlice.actions;

export default DeleteAddressModalSlice.reducer;
