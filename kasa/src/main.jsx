import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import Root from './routes/root'
import ErrorPage from "./routes/error-page";
import About from "./routes/about";
import HousingCard from "./routes/housing-card";
import './assets/scss/main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
