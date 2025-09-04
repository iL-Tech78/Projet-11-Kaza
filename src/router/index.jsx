import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Go crée les pages vides
import Home from "../pages/Home";
import Apartment from "../pages/Apartment";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/logement/:id", element: <Apartment /> },
      { path: "/a-propos", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
