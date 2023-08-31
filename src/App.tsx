import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./utility/Footer/Footer";
import Navbar from "./utility/Navbar/Navbar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getCategories } from "./store/CategorySlice/CategorySlice";
import { ToastContainer } from "react-toastify";
import { getBrands } from "./store/BrandSlice/BrandSlice";
import { getProducts } from "./store/products/ProductSlice/ProductSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.Pagination);
  const { number_of_pages } = useAppSelector((state) => state.Categories);

  useEffect(() => {
    dispatch(getCategories(page <= number_of_pages ? page : 1));
    dispatch(getBrands(page));
    dispatch(getProducts(page));
  }, [dispatch, number_of_pages, page]);

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
