import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../Api/BaseURL";
import {
  CreateProductResponseType,
  GetProductsResponseType,
  ProductType,
} from "../../types/Product/Product.type";

type InitialStateType = {
  products: ProductType[];
  similerProducts: ProductType[];
  bestSellerProducts: ProductType[];
  // modernProducts: ProductType[];
  spescificProduct: ProductType | null;
  loading: boolean;
  error: string;
  number_of_pages: number;
};

const initialState: InitialStateType = {
  products: [],
  similerProducts: [],
  bestSellerProducts: [],
  // modernProducts: [],
  spescificProduct: null,
  loading: true,
  error: "",
  number_of_pages: 0,
};

export const getProducts = createAsyncThunk(
  "Product/getProducts",
  async (page: number) => {
    const url = `api/v1/products?limit=4&page=${page}`;
    const { data } = await BaseURL.get<GetProductsResponseType>(url);
    return data;
  }
);

export const getSimilerProducts = createAsyncThunk(
  "Product/getSimilerProducts",
  async (cat_id: string) => {
    const url = `api/v1/products?limit=4&category[in][]=${cat_id}`;
    const { data } = await BaseURL.get<GetProductsResponseType>(url);
    return data;
  }
);

export const getCategoryProducts = createAsyncThunk(
  "Product/getCategoryProducts",
  async (cat_id: string) => {
    const url = `api/v1/products?category[in][]=${cat_id}`;
    const { data } = await BaseURL.get<GetProductsResponseType>(url);
    return data;
  }
);

export const getBestSellerProducts = createAsyncThunk(
  "Product/getBestSellerProducts",
  async () => {
    const url = `api/v1/products?limit=4&sort=-price`;
    const { data } = await BaseURL.get<GetProductsResponseType>(url);
    return data;
  }
);

// export const getModernProducts = createAsyncThunk(
//   "Product/getModernProducts",
//   async () => {
//     const url = `api/v1/products?limit=4&keyword=new`;
//     const { data } = await BaseURL.get<GetProductsResponseType>(url);
//     return data;
//   }
// );

export const getSpescificProduct = createAsyncThunk(
  "Product/getSpescificProduct",
  async (prod_id: string) => {
    const url = `api/v1/products/${prod_id}`;
    const { data } = await BaseURL.get<CreateProductResponseType>(url);
    return data;
  }
);

export const createProduct = createAsyncThunk(
  "Product/createProduct",
  async (formData: FormData) => {
    const url = "api/v1/products";
    const { data } = await BaseURL.post<CreateProductResponseType>(
      url,
      formData
    );
    return data.data;
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(getSimilerProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSimilerProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.similerProducts = payload.data;
      })
      .addCase(getSimilerProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(getBestSellerProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBestSellerProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.bestSellerProducts = payload.data;
      })
      .addCase(getBestSellerProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      // .addCase(getModernProducts.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getModernProducts.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.modernProducts = payload.data;
      // })
      // .addCase(getModernProducts.rejected, (state, { error }) => {
      //   state.loading = false;
      //   state.error = error.message as string;
      // })

      .addCase(getSpescificProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpescificProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.spescificProduct = payload.data;
      })
      .addCase(getSpescificProduct.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(getCategoryProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getCategoryProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.products.unshift(payload);
      });
  },
});

// export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
