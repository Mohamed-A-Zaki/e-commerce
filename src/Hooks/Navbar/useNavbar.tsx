import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/AuthSlice/AuthSlice";
import { setKeyword } from "../../store/products/FilterProductObjectSlice/FilterProductObjectSlice";

const useNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const { token, user } = useAppSelector((state) => state.Auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    navigate("/products");
    dispatch(setKeyword(e.target.value));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
    navigate("/login");
  };

  return {
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
  };
};

export default useNavbar;
