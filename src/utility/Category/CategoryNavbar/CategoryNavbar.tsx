import {
  AppBar,
  Container,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";

export default function CategoryNavbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", color: "#888" }}>
      <Container fixed>
        <Toolbar disableGutters sx={ToolbarStyle}>
          <Typography fontSize={14}>الكل</Typography>
          <Typography fontSize={14}>الكترونيات</Typography>
          <Typography fontSize={14}>ملابس</Typography>
          <Typography fontSize={14}>كهربية</Typography>
          <Typography fontSize={14}>تخفيضات</Typography>
          <Typography fontSize={14}>تخفيضات</Typography>
          <Typography fontSize={14}>تخفيضات</Typography>
          <Typography fontSize={14}>تخفيضات</Typography>
          <Typography fontSize={14}>تخفيضات</Typography>
          <Typography fontSize={14}>المزيد</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const ToolbarStyle: SxProps<Theme> = {
  gap: 2,
  py: 2,
  flexWrap: "wrap",
  minHeight: "45px !important",

  "& *": {
    cursor: "pointer",

    "&:hover": {
      color: "#000",
    },
  },
};
