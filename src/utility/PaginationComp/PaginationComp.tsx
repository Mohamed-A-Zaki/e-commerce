import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
  SxProps,
  Theme,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPage } from "../../store/PaginationSlice/PaginationSlice";

export default function PaginationComp() {
  const dispatch = useAppDispatch();
  const { page, number_of_pages } = useAppSelector((state) => state.Pagination);

  const Prev = () => <>السابق</>;
  const Next = () => <>التالي</>;

  const renderItem = () => {
    return (item: PaginationRenderItemParams) => (
      <PaginationItem slots={{ previous: Prev, next: Next }} {...item} />
    );
  };

  if (number_of_pages === 0) {
    return null;
  }

  return (
    <Pagination
      count={number_of_pages}
      shape="rounded"
      renderItem={renderItem()}
      sx={PaginationStyle}
      page={page}
      onChange={(_e, value) => dispatch(setPage(value))}
    />
  );
}

const PaginationStyle: SxProps<Theme> = {
  my: "2rem !important",

  "& ul": {
    justifyContent: "center",
  },

  "& button": {
    bgcolor: "#fff",
    border: 1,
    borderColor: "#ccc",
    borderRadius: 2.5,
    p: 2,

    "&:hover": {
      bgcolor: "#000 !important",
      color: "#fff !important",
    },

    "&[aria-current=true]": {
      bgcolor: "#000",
      color: "#fff",
    },
  },
};
