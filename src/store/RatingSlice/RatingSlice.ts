import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateRatingProps,
  CreateReviewResponeType,
  EditRatingProps,
  GetReviewsResponseType,
  ReviewType,
} from "../../types/Rating/Rating";
import BaseURL from "../../Api/BaseURL";

type InitialState = {
  reviews: ReviewType[];
  loading: boolean;
  error: string;
  number_of_pages: number;
};

const initialState: InitialState = {
  reviews: [],
  loading: false,
  error: "",
  number_of_pages: 0,
};

export const getReviews = createAsyncThunk(
  "Rating/getReviews",
  async ({ prod_id, page }: { prod_id: string; page: number }) => {
    const url = `api/v1/products/${prod_id}/reviews?limit=5&page=${page}`;
    const { data } = await BaseURL.get<GetReviewsResponseType>(url);
    return data;
  }
);

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

export const editReview = createAsyncThunk(
  "Rating/editReview",
  async ({ rate_id, values }: EditRatingProps) => {
    const token = localStorage.getItem("token");
    const url = `api/v1/reviews/${rate_id}`;
    const { data } = await BaseURL.put(url, values, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }
);

const RatingSlice = createSlice({
  name: "Rating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /**
       * get reviews
       */
      .addCase(getReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reviews = payload.data;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getReviews.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      /**
       * add new review
       */
      .addCase(createReviw.fulfilled, (state, { payload }) => {
        state.reviews.unshift(payload);
      })
      .addCase(createReviw.rejected, (state, { error }) => {
        state.error = error.message as string;
      })
      /**
       *  delete review
       */
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.reviews = state.reviews.filter(
          (review) => review._id !== payload
        );
      })
      .addCase(deleteReview.rejected, (state, { error }) => {
        state.error = error.message as string;
      })
      /**
       * edit review
       */
      .addCase(editReview.fulfilled, (state, { payload }) => {
        state.reviews = state.reviews.map((review) =>
          review._id === payload._id ? payload : review
        );
      })
      .addCase(editReview.rejected, (state, { error }) => {
        state.error = error.message as string;
      });
  },
});

// export const {} = RatingSlice.actions

export default RatingSlice.reducer;
