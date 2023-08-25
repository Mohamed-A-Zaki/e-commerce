import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./utility/Footer/Footer";
import Navbar from "./utility/Navbar/Navbar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getCategories } from "./store/CategorySlice/CategorySlice";
import { ToastContainer } from "react-toastify";
import { getBrands } from "./store/BrandSlice/BrandSlice";
import {
  getBestSellerProducts,
  getProducts,
} from "./store/ProductSlice/ProductSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.Pagination);

  useEffect(() => {
    dispatch(getCategories(page));
    dispatch(getBrands(page));
    dispatch(getProducts(page));
    dispatch(getBestSellerProducts());
    // dispatch(getModernProducts());
  }, [dispatch, page]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
};

export default App;
