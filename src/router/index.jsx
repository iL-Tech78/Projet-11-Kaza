// Pour respecter la contrainte de Kasa, "faciliter la lecture et l’évolution" : Je vais mettre ici toutes les routes en un seul endroit ici (src/router/index.jsx).
// index.jsx va venir déclarer l’arbre de routes avec createBrowserRouter.
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Apartment from "../pages/Apartment";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout global
    children: [
      { index: true, element: <Home /> },                // correspond à / (la page d’accueil)
      { path: "logement/:id", element: <Apartment /> },  // correspond à par exemple /logement/123
      { path: "a-propos", element: <About /> },          // correspond à /a-propos
      { path: "*", element: <NotFound /> },              // ici je capture toutes les routes non définies sous ce parent.
    ],
  },
]);

export default router;
