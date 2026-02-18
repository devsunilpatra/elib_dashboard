import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import SignUp from "./pages/SignUp";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "home", element: <HomePage/> },
      { path: "books", element:<BooksPage/> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignUp /> },
    ],
  },
 
  
]);

export default router;
