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
import Look from "./routes/Look/Look"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/:room/control",
    element: <Control />,
  },
  {
    path: "/:room/side/:side",
    element: <Side />,
  },
  {
    path: "/:room/side/:side/2k",
    element: <Side downscale />,
  },
  {
    path: "/:room/front",
    element: <Front />,
  },
  {
    path: "/:room/front/2k",
    element: <Front downscale />,
  },
  {
    path: "/:room/portal",
    element: <Portal />,
  },
  {
    path: "/:room/stacy",
    element: <Stacy />,
  },
  {
    path: "/:room/postfx",
    element: <PostFx />,
  },
  {
    path: "/:room/postfx-front",
    element: <PostFx withFront />,
  },
  {
    path: "/:room/postfx-front/2k",
    element: <PostFx downscale withFront />,
  },
  {
    path: "/:room/look",
    element: <Look />
  }
]);

export default () => (
  <RouterProvider router={router} />
)