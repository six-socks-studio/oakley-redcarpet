import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'

import Root from "./routes/Root";
import Control from "./routes/Control/Control"
import Side from "./routes/Side/Side"
import Front from "./routes/Front/Front"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/control",
    element: <Control />,
  },
  {
    path: "/side/:side",
    element: <Side />,
  },
  {
    path: "/front",
    element: <Front />,
  }
  
]);

export default () => (
  <RouterProvider router={router} />
)