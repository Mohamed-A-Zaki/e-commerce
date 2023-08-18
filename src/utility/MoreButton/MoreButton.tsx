import { Box, SxProps, Theme } from "@mui/material";
import { Link } from "react-router-dom";

export type MoreButtonProps = {
  to: string;
};
export default function MoreButton({ to }: MoreButtonProps) {
  return (
    <Box component={Link} to={to} sx={ButtonStyle}>
      المزيد
    </Box>
  );
}

const ButtonStyle: SxProps<Theme> = {
  border: 1,
  px: 2.5,
  py: 1,
  borderRadius: 3,
  "&:hover": {
    bgcolor: "#000",
    color: "#fff",
  },
};
