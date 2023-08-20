import { createHashRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import AllBrand from "./pages/AllBrand/AllBrand";
import AllCategory from "./pages/AllCategory/AllCategory";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

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
    ],
  },
]);

export default router;
