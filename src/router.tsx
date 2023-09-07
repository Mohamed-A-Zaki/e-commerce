import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Cart from "./pages/Website/Cart/Cart";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import NotFound from "./pages/Website/NotFound/NotFound";
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
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import VerifyCode from "./pages/Auth/VerifyCode/VerifyCode";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import AdminAddCoupon from "./pages/Admin/AdminAddCoupon/AdminAddCoupon";
import AdminEditCoupon from "./pages/Admin/AdminEditCoupon/AdminEditCoupon";
import UserEditProfile from "./pages/User/UserEditProfile/UserEditProfile";
import ProtectedRoutes from "./protected_routes/ProtectedRoutes/ProtectedRoutes";
import UserProtectedRoutes from "./protected_routes/UserProtectedRoutes/UserProtectedRoutes";
import AdminProtectedRoutes from "./protected_routes/AdminProtectedRoutes/AdminProtectedRoutes";
import CategoryProductList from "./pages/CategoryProductList/CategoryProductList";
import BrandProductList from "./pages/BrandProductList/BrandProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "verify-code",
        element: <VerifyCode />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
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
        path: "products/category/:id",
        element: <CategoryProductList />,
      },
      {
        path: "products/brand/:id",
        element: <BrandProductList />,
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
        element: (
          <ProtectedRoutes>
            <AdminProtectedRoutes>
              <AdminLayout />
            </AdminProtectedRoutes>
          </ProtectedRoutes>
        ),
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
            path: "addcoupon",
            element: <AdminAddCoupon />,
          },
          {
            path: "editcoupon/:id",
            element: <AdminEditCoupon />,
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
        element: (
          <ProtectedRoutes>
            <UserProtectedRoutes>
              <UserLayout />
            </UserProtectedRoutes>
          </ProtectedRoutes>
        ),
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
            path: "edit-address/:id",
            element: <EditAddress />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "edit-profile",
            element: <UserEditProfile />,
          },
        ],
      },
    ],
  },
]);

export default router;
