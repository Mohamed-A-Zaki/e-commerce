import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./CategorySlice/CategorySlice";
import BrandReducer from "./BrandSlice/BrandSlice";
import ProductReducer from "./ProductSlice/ProductSlice";
import PaginationReducer from "./PaginationSlice/PaginationSlice";
import SubCategoryReducder from "./SubCategorySlice/SubCategorySlice";
import DeleteModalReducer from "./DeleteProductModalSlice/DeleteProductModalSlice";
import FilterProductObjectReducer from "./FilterProductObjectSlice/FilterProductObjectSlice";
import AuthReducer from "./AuthSlice/AuthSlice";
import RatingReducer from "./RatingSlice/RatingSlice";
import DeleteReviewModalReducer from "./DeleteReviewModalSlice/DeleteReviewModalSlice";

export const store = configureStore({
  reducer: {
    Brands: BrandReducer,
    Products: ProductReducer,
    Categories: CategoryReducer,
    Pagination: PaginationReducer,
    Subcategory: SubCategoryReducder,
    DeleteModal: DeleteModalReducer,
    DeleteReview : DeleteReviewModalReducer,
    FilterProductObject: FilterProductObjectReducer,
    Auth: AuthReducer,
    Rating: RatingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
