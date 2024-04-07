import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home'
import ErrorPage from "./pages/error-page";
import About from "./pages/about";
import HousingCard from "./pages/housing-card";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "a-propos",
    element: <About />,
  },
  {
    path: "fiche-logement/:id",
    element: <HousingCard />,
  },
  {
    path: "/erreur404",
    element: <ErrorPage />,
  },
]);
