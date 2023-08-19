import { Pagination, PaginationItem, SxProps, Theme } from "@mui/material";

export default function PaginationComp() {
  const Prev = () => {
    return <>السابق</>;
  };
  const Next = () => {
    return <>التالي</>;
  };

  return (
    <Pagination
      count={10}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem slots={{ previous: Prev, next: Next }} {...item} />
      )}
      siblingCount={0}
      sx={PaginationStyle}
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
