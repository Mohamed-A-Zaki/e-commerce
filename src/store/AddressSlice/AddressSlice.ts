import BaseURL from "../../Api/BaseURL";
import {
  AddressFormDataType,
  AddressType,
} from "../../types/Address/Address.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  addresses: AddressType[];
  address: AddressType | null;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  addresses: [],
  address: null,
  loading: false,
  error: "",
};

export const getAddresses = createAsyncThunk(
  "Address/getAddresses",
  async () => {
    const token = localStorage.getItem("token");
    const url = "api/v1/addresses";
    const { data } = await BaseURL.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const getSpecificAddress = createAsyncThunk(
  "Address/getSpecificAddress",
  async (id: string) => {
    const token = localStorage.getItem("token");
    const url = `api/v1/addresses/${id}`;
    const { data } = await BaseURL.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const createAddress = createAsyncThunk(
  "Address/createAddress",
  async (address: AddressFormDataType) => {
    const token = localStorage.getItem("token");
    const url = "api/v1/addresses";
    const { data } = await BaseURL.post(url, address, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "Address/deleteAddress",
  async (id: string) => {
    const token = localStorage.getItem("token");
    const url = `api/v1/addresses/${id}`;
    await BaseURL.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

export const updateAddress = createAsyncThunk(
  "Address/updateAddress",
  async ({ id, address }: { id: string; address: AddressFormDataType }) => {
    const token = localStorage.getItem("token");
    const url = `api/v1/addresses/${id}`;
    await BaseURL.put(url, address, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

const AddressSlice = createSlice({
  name: "Address",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAddresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddresses.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.addresses = payload;
      })
      .addCase(getAddresses.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      .addCase(createAddress.fulfilled, (state, { payload }) => {
        state.addresses.unshift(payload);
      })
      .addCase(getSpecificAddress.fulfilled, (state, { payload }) => {
        state.address = payload;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.addresses = state.addresses.filter(
          (item) => item._id !== payload
        );
      })
      .addCase(updateAddress.fulfilled, (state, { payload }) => {
        state.addresses = state.addresses.filter((item) =>
          item._id === payload ? payload : item
        );
      });
  },
});

// export const {} = AddressSlice.actions;

export default AddressSlice.reducer;
