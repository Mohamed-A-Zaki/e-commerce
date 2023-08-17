import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  SxProps,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";

import logo from "../../../assets/logo.png";

import { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#000", py: 1 }}>
      <Container fixed>
        <Toolbar disableGutters>
          <Box component={Link} to="/">
            <Box component={"img"} src={logo} sx={LogoStyle} />
          </Box>

          <TextField
            type="search"
            placeholder="ابحث..."
            size="small"
            sx={SearchStyle}
          />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">دخول</Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">العربة</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button onClick={handleCloseNavMenu} sx={ButtonStyle}>
              <AccountCircleIcon />
              دخول
            </Button>

            <Button onClick={handleCloseNavMenu} sx={ButtonStyle}>
              <AddShoppingCartIcon />
              العربة
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const ButtonStyle: SxProps<Theme> = {
  my: 2,
  color: "white",
  minWidth: "fit-content",
  display: "flex",
  gap: 1,
};

const SearchStyle: SxProps<Theme> = {
  flex: 1,
  bgcolor: "#fff",
  borderRadius: 2,
  "& input": {
    textAlign: "center !important",
  },
  "& .MuiOutlinedInput-root > fieldset": {
    borderRadius: 2,
  },
};

const LogoStyle: SxProps<Theme> = {
  ml: 1,
  width: 60,
  height: 60,
  objectFit: "contain",
};
