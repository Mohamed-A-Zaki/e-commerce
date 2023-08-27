import { useEffect, useState } from "react";
import { setKeyword } from "../store/FilterProductObjectSlice/FilterProductObjectSlice";
import { filterProducts } from "../store/ProductSlice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

const useNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.Pagination);
  const filter_object = useAppSelector((state) => state.FilterProductObject);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate("/products");
    dispatch(setKeyword(e.target.value));
  };

  useEffect(() => {
    dispatch(filterProducts({ ...filter_object, page }));
  }, [dispatch, filter_object, page]);

  return { anchorElNav, handleChange, handleCloseNavMenu, handleOpenNavMenu };
};

export default useNavbar;
