import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  setNumberOfPages,
  setPage,
} from "../../store/PaginationSlice/PaginationSlice";

const usePagination = (numberOfPages: number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(setNumberOfPages(numberOfPages));
  }, [dispatch, numberOfPages]);
};

export default usePagination;
