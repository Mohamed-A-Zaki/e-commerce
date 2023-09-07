import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../Api/BaseURL";
import {
  CreateCashOrderParamsType,
  GetAllOrdersType,
  OrderType,
} from "../../types/Order/Order.type";

type InitialState = {
  orders: OrderType[];
  loading: boolean;
  error: string;
  number_of_pages: number;
};

const initialState: InitialState = {
  orders: [],
  loading: false,
  error: "",
  number_of_pages: 0,
};

export const getAllOrders = createAsyncThunk(
  "Order/getAllOrders",
  async (page: number) => {
    const url = `api/v1/orders?limit=3&page=${page}`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.get<GetAllOrdersType>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

export const createCashOrder = createAsyncThunk(
  "Order/creatCashOrder",
  async ({ cartId, address }: CreateCashOrderParamsType) => {
    const url = `api/v1/orders/${cartId}`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.post(url, address, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orders = payload.data;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getAllOrders.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      });
  },
});

export default OrderSlice.reducer;
