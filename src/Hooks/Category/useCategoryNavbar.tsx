import { useNavigate } from "react-router-dom";
import { setPage } from "../../store/PaginationSlice/PaginationSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCategoryProducts, getProducts } from "../../store/products/ProductSlice/ProductSlice";

const useCategoryNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.Categories);

  const handle_all_cat = () => {
    dispatch(getProducts(1));
    dispatch(setPage(1));
  };

  const handle_cat = (id: string) => {
    navigate("/products");
    dispatch(getCategoryProducts(id));
  };

  return { categories, handle_all_cat, handle_cat };
};

export default useCategoryNavbar;
