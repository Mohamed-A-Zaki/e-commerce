import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePagination from "../Pagination/usePagination";
import { getProducts } from "../../store/products/ProductSlice/ProductSlice";

const useAdminAllProducts = () => {
  const dispatch = useAppDispatch();
  const { products, number_of_pages } = useAppSelector(
    (state) => state.Products
  );

  const { page } = useAppSelector((state) => state.Pagination);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  usePagination(number_of_pages);

  return products;
};

export default useAdminAllProducts;
