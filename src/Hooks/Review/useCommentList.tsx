import { useEffect } from "react";
import { getReviews } from "../../store/RatingSlice/RatingSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePagination from "../Pagination/usePagination";

/**
 * Custom hook to fetch and manage a list of comments.
 *
 * @return {Object} An object containing the list of comments, loading state, and error state.
 */
const useCommentList = () => {
  const dispatch = useAppDispatch();
  const { spescificProduct } = useAppSelector((state) => state.Products);
  const { reviews, loading, error } = useAppSelector((state) => state.Rating);

  const { page } = useAppSelector((state) => state.Pagination);
  const { number_of_pages } = useAppSelector((state) => state.Rating);
  
  usePagination(number_of_pages);

  useEffect(() => {
    if (spescificProduct?._id) {
      dispatch(getReviews({ prod_id: spescificProduct?._id, page: page }));
    }
  }, [dispatch, page, spescificProduct?._id]);

  return { reviews, loading, error };
};

export default useCommentList;
