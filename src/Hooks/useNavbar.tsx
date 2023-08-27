import { useState } from "react";
import { setKeyword } from "../store/FilterProductObjectSlice/FilterProductObjectSlice";
// import { filterProducts } from "../store/ProductSlice/ProductSlice";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";

const useNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

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

  return { anchorElNav, handleBlur, handleCloseNavMenu, handleOpenNavMenu };
};

export default useNavbar;
