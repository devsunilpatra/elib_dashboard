import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/", element: <HomePage /> },
]);

export default router;
