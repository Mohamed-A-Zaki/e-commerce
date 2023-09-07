import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../Api/BaseURL";
import {
  CreateCashOrderParamsType,
  GetAllOrdersType,
  OrderType,
} from "../../types/Order/Order.type";

type InitialState = {
  orders: OrderType[];
  specific_order: OrderType | null;
  loading: boolean;
  error: string;
  number_of_pages: number;
};

const initialState: InitialState = {
  orders: [],
  specific_order: null,
  loading: false,
  error: "",
  number_of_pages: 0,
};

export const getAllOrders = createAsyncThunk(
  "Order/getAllOrders",
  async (page: number) => {
    const url = `api/v1/orders?limit=5&page=${page}`;
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

export const getSpecificOrder = createAsyncThunk(
  "Order/getSpecificOrder",
  async (id: string) => {
    const url = `api/v1/orders/${id}`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.get<{ data: OrderType }>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

export const updateOrderToPaid = createAsyncThunk(
  "Order/updateOrderToPaid",
  async (id: string) => {
    const url = `api/v1/orders/${id}/pay`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.put<{ data: OrderType }>(
      url,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  }
);

export const updateOrderToDeliverd = createAsyncThunk(
  "Order/updateOrderToDeliverd",
  async (id: string) => {
    const url = `api/v1/orders/${id}/deliver`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.put<{ data: OrderType }>(
      url,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
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
      })

      .addCase(getSpecificOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpecificOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.specific_order = payload.data;
        console.log(payload);
      })
      .addCase(getSpecificOrder.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(updateOrderToPaid.fulfilled, (state, { payload }) => {
        state.specific_order = payload;
      })
      .addCase(updateOrderToDeliverd.fulfilled, (state, { payload }) => {
        state.specific_order = payload;
      });
  },
});

export default OrderSlice.reducer;
