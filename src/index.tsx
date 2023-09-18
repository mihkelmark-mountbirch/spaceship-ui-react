import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import Layout from "./components/Layout";
import Spaceships from "./pages/spaceship";
import Passengers from "./pages/passenger";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "spaceships",
        element: <Spaceships />,
      },
      {
        path: "passengers",
        element: <Passengers />,
      },
    ],
  },
]);

const container = document.getElementById("app-root")!;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
