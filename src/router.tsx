import { createHashRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import AllBrand from "./pages/AllBrand/AllBrand";
import AllCategory from "./pages/AllCategory/AllCategory";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PaymentMethod from "./pages/PaymentMethod/PaymentMethod";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "allbrand",
        element: <AllBrand />,
      },
      {
        path: "allcategory",
        element: <AllCategory />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "order/paymethod",
        element: <PaymentMethod />,
      },
    ],
  },
]);

export default router;
