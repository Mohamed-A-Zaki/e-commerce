import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./CategorySlice/CategorySlice";
import BrandReducer from "./BrandSlice/BrandSlice";
import ProductReducer from "./ProductSlice/ProductSlice";
import PaginationReducer from "./PaginationSlice/PaginationSlice";
import SubCategoryReducder from "./SubCategorySlice/SubCategorySlice";
import DeleteModalReducer from "./DeleteModalSlice/DeleteModalSlice";

export const store = configureStore({
  reducer: {
    Brands: BrandReducer,
    Products: ProductReducer,
    Categories: CategoryReducer,
    Pagination: PaginationReducer,
    Subcategory: SubCategoryReducder,
    DeleteModal: DeleteModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
