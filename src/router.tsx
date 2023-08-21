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
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout";
import AdminAllOrders from "./pages/Admin/AdminAllOrders/AdminAllOrders";
import AdminAllProducts from "./pages/Admin/AdminAllProducts/AdminAllProducts";
import AdminAddBrand from "./pages/Admin/AdminAddBrand/AdminAddBrand";
import AdminAddCategory from "./pages/Admin/AdminAddCategory/AdminAddCategory";
import AdminAddSubCategory from "./pages/Admin/AdminAddSubCategory/AdminAddSubCategory";
import AdminAddProduct from "./pages/Admin/AdminAddProduct/AdminAddProduct";
import AdminOrderDetails from "./pages/Admin/AdminOrderDetails/AdminOrderDetails";

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
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "allorders",
            element: <AdminAllOrders />,
          },
          {
            path: "orders/:order_id",
            element: <AdminOrderDetails />,
          },
          {
            path: "allproducts",
            element: <AdminAllProducts />,
          },
          {
            path: "addbrand",
            element: <AdminAddBrand />,
          },
          {
            path: "addcategory",
            element: <AdminAddCategory />,
          },
          {
            path: "addsubcategory",
            element: <AdminAddSubCategory />,
          },
          {
            path: "addproduct",
            element: <AdminAddProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
