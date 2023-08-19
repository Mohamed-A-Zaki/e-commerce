import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./utility/Footer/Footer";
import Navbar from "./utility/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
