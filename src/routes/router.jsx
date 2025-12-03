import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import MyProfile from "../pages/MyProfile";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "../provider/PrivateRoute";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import ProductPage from "../pages/ProductPage";
import StoreLocation from "../pages/StoreLocation";
import AllProduct from "../pages/AllProduct";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProduct />,
        loader: async () => {
          const response = await fetch("/products.json");
          return response.json();
        },
      },
      {
        path: "/store-location",
        element: <StoreLocation />,
        loader: async () => {
          const response = await fetch("/products.json");
          return response.json();
        },
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
        loader: async () => {
          const response = await fetch("/products.json");
          return response.json();
        },
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
    loader: () => fetch("/products.json").then((res) => res.json()),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;