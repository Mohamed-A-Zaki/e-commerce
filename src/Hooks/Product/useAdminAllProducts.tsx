import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePagination from "../Pagination/usePagination";
import { getProducts } from "../../store/products/ProductSlice/ProductSlice";

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
