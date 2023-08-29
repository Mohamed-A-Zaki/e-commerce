import { setPage } from "../../store/PaginationSlice/PaginationSlice";
import {
  getCategoryProducts,
  getProducts,
} from "../../store/ProductSlice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useCategoryNavbar = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.Categories);

  const handle_all_cat = () => {
    dispatch(getProducts(1));
    dispatch(setPage(1));
  };

  const handle_cat = (id: string) => {
    dispatch(getCategoryProducts(id));
  };

  return { categories, handle_all_cat, handle_cat };
};

export default useCategoryNavbar;
