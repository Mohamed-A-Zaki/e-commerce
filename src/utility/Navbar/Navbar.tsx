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

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import useNavbar from "../../Hooks/Navbar/useNavbar";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Navbar() {
  const {
    anchorElNav,
    handleBlur,
    handleCloseNavMenu,
    handleOpenNavMenu,
    anchorEl,
    handleClick,
    handleClose,
    open,
    token,
    user,
    handleLogout,
  } = useNavbar();

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
            onBlur={handleBlur}
          />

          {/* start of small screen */}
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
              {!token && (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to={"/login"}>
                    <Typography sx={MenuItemStyle}>
                      <AccountCircleIcon />
                      دخول
                    </Typography>
                  </Link>
                </MenuItem>
              )}

              {token && (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/user/profile">
                    <Typography sx={MenuItemStyle}>
                      <AccountCircleIcon />
                      الملف الشخصي
                    </Typography>
                  </Link>
                </MenuItem>
              )}

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/cart">
                  <Typography sx={MenuItemStyle}>
                    <AddShoppingCartIcon />
                    العربة
                  </Typography>
                </Link>
              </MenuItem>

              {token && (
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    handleLogout();
                  }}
                >
                  <Typography sx={MenuItemStyle}>
                    <LogoutIcon />
                    تسجيل خروج
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          {/* end of small screen */}

          {/* start of big screen */}
          <Box
            sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}
          >
            {!token && (
              <Link to="/login">
                <Button onClick={handleCloseNavMenu} sx={ButtonStyle}>
                  <AccountCircleIcon />
                  دخول
                </Button>
              </Link>
            )}

            {token && (
              <>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "#fff", textTransform: "none", gap: 1 }}
                >
                  <AccountCircleIcon />
                  {user.name}
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{ display: { xs: "none", md: "block" } }}
                  MenuListProps={{ "aria-labelledby": "basic-button" }}
                >
                  {user.role === "user" && (
                    <MenuItem onClick={handleClose}>
                      <Link to="/user/profile">
                        <Typography sx={MenuItemStyle}>
                          <AccountCircleIcon />
                          الملف الشخصي
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}

                  {user.role === "admin" && (
                    <MenuItem onClick={handleClose}>
                      <Link to="/admin/allproducts">
                        <Typography sx={MenuItemStyle}>
                          <DashboardIcon />
                          لوحة التحكم
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}

                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      handleLogout();
                    }}
                  >
                    <Typography sx={MenuItemStyle}>
                      <LogoutIcon />
                      تسجيل خروج
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            )}

            <Link to="/cart">
              <Button onClick={handleCloseNavMenu} sx={ButtonStyle}>
                <AddShoppingCartIcon />
                العربة
              </Button>
            </Link>
          </Box>
          {/* end of big screen */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const MenuItemStyle: SxProps<Theme> = {
  textAlign: "center",
  display: "flex",
  gap: 1,
  color: "#000",
};

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
