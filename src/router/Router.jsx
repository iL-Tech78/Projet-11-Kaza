// Mon composant « Routeur » qui va rend <RouterProvider/>
import { RouterProvider } from "react-router-dom";
import router from "./index";

export default function Router() {
  return <RouterProvider router={router} />;
}
