import { filterProducts } from "../store/ProductSlice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import usePagination from "./usePagination";
import { useEffect } from "react";

const useProductsPage = () => {
  const { products, number_of_pages } = useAppSelector(
    (state) => state.Products
  );

  usePagination(number_of_pages);

  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.Pagination);
  const filter_object = useAppSelector((state) => state.FilterProductObject);

  useEffect(() => {
    dispatch(filterProducts({ ...filter_object, page }));
  }, [dispatch, filter_object, page]);

  return products;
};

export default useProductsPage;
