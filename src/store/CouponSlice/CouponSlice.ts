import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddCouponResponseType,
  CouponFormDataType,
  CouponType,
  GetCouponsResponseType,
} from "../../types/Coupon/Coupon.type";
import BaseURL from "../../Api/BaseURL";

type InitialState = {
  coupons: CouponType[];
  specificCoupon: CouponType | null;
  loading: boolean;
};

const initialState: InitialState = {
  coupons: [],
  specificCoupon: null,
  loading: false,
};

export const getCoupons = createAsyncThunk("coupon/getCoupons", async () => {
  const url = "api/v1/coupons";
  const token = localStorage.getItem("token");
  const { data } = await BaseURL.get<GetCouponsResponseType>(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
});

export const getSpecificCoupon = createAsyncThunk(
  "Coupon/getSpecificCoupon",
  async (id: string) => {
    const url = `api/v1/coupons/${id}`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.get<AddCouponResponseType>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const editCoupon = createAsyncThunk(
  "Coupon/editCoupon",
  async ({ id, values }: { id: string; values: CouponFormDataType }) => {
    const url = `api/v1/coupons/${id}`;
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.put<AddCouponResponseType>(url, values, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const addCoupon = createAsyncThunk(
  "Coupon/addCoupon",
  async (values: CouponFormDataType) => {
    const url = "api/v1/coupons";
    const token = localStorage.getItem("token");
    const { data } = await BaseURL.post<AddCouponResponseType>(url, values, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const deleteCoupon = createAsyncThunk(
  "Coupon/deleteCoupon",
  async (id: string) => {
    const url = `api/v1/coupons/${id}`;
    const token = localStorage.getItem("token");
    await BaseURL.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

const CouponSlice = createSlice({
  name: "Coupon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCoupons.fulfilled, (state, { payload }) => {
        state.coupons = payload;
      })
      .addCase(addCoupon.fulfilled, (state, { payload }) => {
        state.coupons.unshift(payload);
      })
      .addCase(deleteCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCoupon.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.coupons = state.coupons.filter((item) => item._id !== payload);
      })
      .addCase(getSpecificCoupon.fulfilled, (state, { payload }) => {
        state.specificCoupon = payload;
      });
  },
});

// export const {} = CouponSlice.actions

export default CouponSlice.reducer;
