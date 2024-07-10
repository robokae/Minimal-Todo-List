import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./sass/main.scss";
import Error from "./views/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import Landing from "./views/Landing";
import Settings from "./views/Settings";
import { Provider } from "react-redux";
import { store } from "./store";
import { saveState } from "./localStorage";
import faIcons from "./config/iconConfig";
import { createRoot } from "react-dom/client";

// Add icons to library so that they can be used globally
library.add(faIcons);

store.subscribe(() => saveState(store.getState()));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Navbar />
    <RouterProvider router={router} />
  </Provider>
);
