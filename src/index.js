import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Error, Home, Login, Register, Landing, Settings } from "./views";
import "./sass/main.scss";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";
import { saveState } from "./localStorage";
import faIcons from "./config/iconConfig";
import { createRoot } from "react-dom/client";

// Add icons to library so that they can be used globally
library.add(faIcons);

store.subscribe(() => saveState(store.getState()));

const router = createBrowserRouter([
  { errorElement: <Error /> },
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/landing", element: <Landing /> },
  { path: "/settings", element: <Settings /> },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Navbar />
    <RouterProvider router={router} />
  </Provider>
);
