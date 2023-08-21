import { SxProps, Theme } from "@mui/material";

export const MenuItemStyle: SxProps<Theme> = {
  bgcolor: "#fff !important",
  mx: 1.5,
  py: 1,
  fontSize: 14,
  borderBottom: 1,
  borderColor: "#ddd",
  borderRadius: 2,
  "&:last-child": {
    borderBottom: 0,
  },
  "&:hover": {
    bgcolor: "#000 !important",
    color: "#fff",
  },
};
