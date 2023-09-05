import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./CategorySlice/CategorySlice";
import BrandReducer from "./BrandSlice/BrandSlice";
import PaginationReducer from "./PaginationSlice/PaginationSlice";
import SubCategoryReducder from "./SubCategorySlice/SubCategorySlice";
import DeleteModalReducer from "./products/DeleteProductModalSlice/DeleteProductModalSlice";
import AuthReducer from "./AuthSlice/AuthSlice";
import RatingReducer from "./RatingSlice/RatingSlice";
import DeleteReviewModalReducer from "./DeleteReviewModalSlice/DeleteReviewModalSlice";
import EditReviewModalReducer from "./EditReviewModalSlice/EditReviewModalSlice";
import ProductReducer from "./products/ProductSlice/ProductSlice";
import FilterProductObjectReducer from "./products/FilterProductObjectSlice/FilterProductObjectSlice";
import WishListReducer from "./WishList/WishListSlice";
import CouponReducer from "./CouponSlice/CouponSlice";
import DeleteCouponModalReducer from "./DeleteCouponModalSlice/DeleteCouponModalSlice";
import AddressReducer from "./AddressSlice/AddressSlice";
import DeleteAddressModalReducer from "./DeleteAddressModalSlice/DeleteAddressModalSlice";
import CartReducer from "./CartSlice/CartSlice";
import DeleteProductFromCartModalReducer from "./DeleteProductFromCartModalSlice/DeleteProductFromCartModalSlice";
import ClearCartModalReducer from "./ClearCartModalSlice/ClearCartModalSlice";

export const store = configureStore({
  reducer: {
    Brands: BrandReducer,
    Products: ProductReducer,
    Categories: CategoryReducer,
    Pagination: PaginationReducer,
    Subcategory: SubCategoryReducder,
    DeleteModal: DeleteModalReducer,
    DeleteReview: DeleteReviewModalReducer,
    EditReview: EditReviewModalReducer,
    FilterProductObject: FilterProductObjectReducer,
    Auth: AuthReducer,
    Rating: RatingReducer,
    WishList: WishListReducer,
    Coupon: CouponReducer,
    DeleteCouponModal: DeleteCouponModalReducer,
    Address: AddressReducer,
    DeleteAddressModal: DeleteAddressModalReducer,
    Cart: CartReducer,
    DeleteProductFromCart: DeleteProductFromCartModalReducer,
    ClearCartModal: ClearCartModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
