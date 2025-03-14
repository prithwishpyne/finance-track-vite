import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./components/auth/Auth";
// import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

export default router;
