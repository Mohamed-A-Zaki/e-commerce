import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProducts } from "../../store/ProductSlice/ProductSlice";
import usePagination from "../Pagination/usePagination";

const useAdminAllProducts = () => {
  const dispatch = useAppDispatch();
  const { products, number_of_pages } = useAppSelector(
    (state) => state.Products
  );

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  usePagination(number_of_pages);

  return products;
};

export default useAdminAllProducts;
