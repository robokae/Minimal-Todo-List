import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faTrash,
  faEllipsisH,
  faTimes,
  faPlus,
  faSearch,
  faChevronDown,
  faFileAlt,
  faCalendar,
  faList,
  faTasks,
  faExclamationCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faStar, faSquare, faClock } from "@fortawesome/free-regular-svg-icons";
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

// Add icons to library so that they can be used globally
library.add(
  faSquare,
  faCheckSquare,
  faStar,
  faTrash,
  faEllipsisH,
  faTimes,
  faPlus,
  faSearch,
  faTrash,
  faChevronDown,
  faTimes,
  faFileAlt,
  faCalendar,
  faClock,
  faList,
  faTasks,
  faExclamationCircle,
  faExclamationTriangle
);

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

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root")
);
