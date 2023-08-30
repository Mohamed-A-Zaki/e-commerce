import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateRatingProps,
  CreateReviewResponeType,
} from "../../types/Rating/Rating";
import BaseURL from "../../Api/BaseURL";

const initialState = {
  error: "",
};

export const createReviw = createAsyncThunk(
  "Rating/createReviw",
  async ({ prod_id, values }: CreateRatingProps) => {
    const token = localStorage.getItem("token");
    const url = `api/v1/products/${prod_id}/reviews`;
    const { data } = await BaseURL.post<CreateReviewResponeType>(url, values, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

export const deleteReview = createAsyncThunk(
  "Rating/deleteReview",
  async (id: string) => {
    const token = localStorage.getItem("token");
    const url = `api/v1/reviews/${id}`;
    await BaseURL.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

const RatingSlice = createSlice({
  name: "Rating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReviw.rejected, (state, { error }) => {
      state.error = error.message as string;
    })
  },
});

// export const {} = RatingSlice.actions

export default RatingSlice.reducer;
