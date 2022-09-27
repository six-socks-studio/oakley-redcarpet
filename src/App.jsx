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
import Portal from "./routes/Portal/Portal"
import Stacy from "./routes/Stacy/Stacy"
import PostFx from "./routes/PostFx/PostFx"

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
    path: "/side/:side/2k",
    element: <Side downscale />,
  },
  {
    path: "/front",
    element: <Front />,
  },
  {
    path: "/front/2k",
    element: <Front downscale />,
  },
  {
    path: "/portal",
    element: <Portal />,
  },
  {
    path: "/stacy",
    element: <Stacy />,
  },
  {
    path: "/postfx",
    element: <PostFx />,
  },
  {
    path: "/postfx-front",
    element: <PostFx withFront />,
  },
  {
    path: "/postfx-front/2k",
    element: <PostFx downscale withFront />,
  },
]);

export default () => (
  <RouterProvider router={router} />
)