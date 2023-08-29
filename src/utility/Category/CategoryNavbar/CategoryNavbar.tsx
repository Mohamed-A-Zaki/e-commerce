import {
  AppBar,
  Container,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import useCategoryNavbar from "../../../Hooks/Category/useCategoryNavbar";

/**
 * Renders the category navigation bar component.
 *
 * @return {JSX.Element} The rendered category navigation bar component.
 */
export default function CategoryNavbar(): JSX.Element {
  const { categories, handle_all_cat, handle_cat } = useCategoryNavbar();

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", color: "#888" }}>
      <Container fixed>
        <Toolbar disableGutters sx={ToolbarStyle}>
          <Typography fontSize={14} onClick={handle_all_cat}>
            الكل
          </Typography>

          {categories.map((category) => (
            <Typography
              key={category._id}
              fontSize={14}
              onClick={() => handle_cat(category._id)}
            >
              {category.name}
            </Typography>
          ))}
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
