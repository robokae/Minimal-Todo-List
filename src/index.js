import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faTrash,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { faStar, faSquare } from "@fortawesome/free-regular-svg-icons";
import "./styles/index.css";
import ErrorPage from "./views/ErrorPage";

// Add icons to library so that they can be used globally
library.add(faSquare, faCheckSquare, faStar, faTrash, faEllipsisH);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
