import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Planet } from "./pages/planet/[id]";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planet/:id",
    element: <Planet />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
