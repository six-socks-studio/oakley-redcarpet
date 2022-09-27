import React from "react";
import ReactDOM from "react-dom/client";
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";

import Root from "./routes/Root";
import Control from "./routes/Control/Control"
import Side from "./routes/Side/Side"
import Front from "./routes/Front/Front"

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Root />,
//   },
//   {
//     path: "/control",
//     element: <Control />,
//   },
//   {
//     path: "/side/:side",
//     element: <Side />,
//   },
//   {
//     path: "/front",
//     element: <Front />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/control" element={<Control />} />
        <Route path="/front" element={<Front />} />
        <Route path="/side/:side" element={<Side />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);