import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faTrash,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { faStar, faSquare } from "@fortawesome/free-regular-svg-icons";
import "./sass/main.scss";
import ErrorPage from "./views/ErrorPage";
import Navbar from "./components/Navbar";

// Add icons to library so that they can be used globally
library.add(faSquare, faCheckSquare, faStar, faTrash, faEllipsisH);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <>
    <Navbar />
    <RouterProvider router={router} />
  </>,
  document.getElementById("root")
);
