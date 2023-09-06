import BaseURL from "../../../Api/BaseURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateProductResponseType,
  GetProductsResponseType,
  ProductType,
} from "../../../types/Product/Product.type";
import { filterProductObjectType } from "../FilterProductObjectSlice/FilterProductObjectSlice";

type InitialStateType = {
  products: ProductType[];
  cat_products: ProductType[];
  brabd_products: ProductType[];
  results_count: number;
  similerProducts: ProductType[];
  bestSellerProducts: ProductType[];
  spescificProduct: ProductType | null;
  loading: boolean;
  error: string;
  number_of_pages: number;
};

const initialState: InitialStateType = {
  products: [],
  cat_products: [],
  brabd_products: [],
  results_count: 0,
  similerProducts: [],
  bestSellerProducts: [],
  spescificProduct: null,
  loading: true,
  error: "",
  number_of_pages: 0,
};

const token = localStorage.getItem("token");

export const getProducts = createAsyncThunk(
  "Product/getProducts",
  async (page: number) => {
    const url = `api/v1/products?limit=8&page=${page}`;
    const { data } = await BaseURL.get<GetProductsResponseType>(url);
    return data;
  }
);

export const filterProducts = createAsyncThunk(
  "Product/filterProducts",
  async ({
    page,
    sort,
    category,
    brand,
    keyword,
    priceFrom,
    priceTo,
  }: filterProductObjectType & { page: number }) => {
    let brand_param = brand
      .map((item) => {
        return `brand[in][]=${item}`;
      })
      .join("&");

    let category_param = category
      .map((item) => {
        return `category[in][]=${item}`;
      })
      .join("&");

    const priceParam = priceFrom
      ? priceTo
        ? `price[gt]=${priceFrom}&price[lt]=${priceTo}`
        : `price[gt]=${priceFrom}`
      : "";

    brand_param = brand_param ? `&${brand_param}` : "";
    category_param = category_param ? `&${category_param}` : "";

    const url = `api/v1/products?limit=8&page=${page}&sort=${sort}&keyword=${keyword}${category_param}${brand_param}&${priceParam}`;
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
  async ({ cat_id, page }: { cat_id: string; page: number }) => {
    const url = `api/v1/products?limit=8&page=${page}&category=${cat_id}`;
    const { data } = await BaseURL.get<GetProductsResponseType>(url);
    return data;
  }
);

export const getBrandProducts = createAsyncThunk(
  "Product/getBrandProducts",
  async ({ brand_id, page }: { brand_id: string; page: number }) => {
    const url = `api/v1/products?limit=8page=${page}&brand=${brand_id}`;
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
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "Product/deleteProduct",
  async (id: string) => {
    const url = `api/v1/products/${id}`;
    await BaseURL.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  "Product/updateProduct",
  async ({ id, formData }: { id: string; formData: FormData }) => {
    const url = `api/v1/products/${id}`;
    const { data } = await BaseURL.put<CreateProductResponseType>(
      url,
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
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
      // get products
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data;
        state.results_count = payload.results;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      // filter products
      .addCase(filterProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data;
        state.results_count = payload.results;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(filterProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      // get dimiller products
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
      // get best seller products
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

      // get one product
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
      // get category products
      .addCase(getCategoryProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cat_products = payload.data;
        state.results_count = payload.results;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getCategoryProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      // get brand products
      .addCase(getBrandProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrandProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cat_products = payload.data;
        state.results_count = payload.results;
        state.number_of_pages = payload.paginationResult.numberOfPages;
      })
      .addCase(getBrandProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      // delete product
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.products = state.products.filter(
          (product) => product._id !== payload
        );
      })
      // create product
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.products.unshift(payload);
      });
  },
});

// export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
