import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout.jsx";
import { Root } from "../pages/root.jsx";
import { Detail } from "../pages/details.jsx";
import { ROUTE_PATHES } from "./pathes.js";
import { NotFoundPage } from "../pages/notFound.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATHES.root,
        element: <Root />,
      },
      {
        path: ROUTE_PATHES.base,
        element: <Root />,
      },
      {
        path: ROUTE_PATHES.detail,
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
