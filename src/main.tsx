import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource-variable/overpass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Card } from "./components/Card/Card.tsx";
import { Root } from "./components/Root.tsx";
import { CardThankYou } from "./components/CardThankYou/CardThankYou.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/home",
        element: <Card />,
      },
      {
        path: "/thank",
        element: <CardThankYou />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
