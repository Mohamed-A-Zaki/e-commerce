import { createHashRouter } from "react-router-dom";

import App from "./App";

import Cart from "./pages/Website/Cart/Cart";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import ProductDetails from "./pages/Website/ProductDetails/ProductDetails";
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout";
import AdminAllOrders from "./pages/Admin/AdminAllOrders/AdminAllOrders";
import AdminAllProducts from "./pages/Admin/AdminAllProducts/AdminAllProducts";
import AdminAddBrand from "./pages/Admin/AdminAddBrand/AdminAddBrand";
import AdminAddCategory from "./pages/Admin/AdminAddCategory/AdminAddCategory";
import AdminAddSubCategory from "./pages/Admin/AdminAddSubCategory/AdminAddSubCategory";
import AdminAddProduct from "./pages/Admin/AdminAddProduct/AdminAddProduct";
import AdminOrderDetails from "./pages/Admin/AdminOrderDetails/AdminOrderDetails";
import UserLayout from "./components/User/UserLayout/UserLayout";
import UserAllOrders from "./pages/User/UserAllOrders/UserAllOrders";
import UserFavourite from "./pages/User/UserFavourite/UserFavourite";
import UserAddresses from "./pages/User/UserAddresses/UserAddresses";
import UserProfile from "./pages/User/UserProfile/UserProfile";
import AddNewAddress from "./pages/User/AddNewAddress/AddNewAddress";
import EditAddress from "./pages/User/EditAddress/EditAddress";
import Home from "./pages/Website/Home/Home";
import AllBrand from "./pages/Website/AllBrand/AllBrand";
import AllCategory from "./pages/Website/AllCategory/AllCategory";
import Products from "./pages/Website/Products/Products";
import PaymentMethod from "./pages/Website/PaymentMethod/PaymentMethod";
import AdminEditProduct from "./pages/Admin/AdminEditProduct/AdminEditProduct";

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
          {
            path: "editproduct/:id",
            element: <AdminEditProduct />,
          },
        ],
      },
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            path: "allorders",
            element: <UserAllOrders />,
          },
          {
            path: "favoriteproducts",
            element: <UserFavourite />,
          },
          {
            path: "addresses",
            element: <UserAddresses />,
          },
          {
            path: "add-address",
            element: <AddNewAddress />,
          },
          {
            path: "edit-address",
            element: <EditAddress />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
]);

export default router;
