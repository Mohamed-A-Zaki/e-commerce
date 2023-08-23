import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./CategorySlice/CategorySlice";
import BrandReducer from "./BrandSlice/BrandSlice";
import ProductReducer from "./ProductSlice/ProductSlice";
import PaginationReducer from "./PaginationSlice/PaginationSlice";

export const store = configureStore({
  reducer: {
    Brands: BrandReducer,
    Products: ProductReducer,
    Categories: CategoryReducer,
    Pagination: PaginationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
