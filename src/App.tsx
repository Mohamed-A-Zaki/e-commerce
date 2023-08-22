import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./utility/Footer/Footer";
import Navbar from "./utility/Navbar/Navbar";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getCategories } from "./store/CategorySlice/CategorySlice";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
