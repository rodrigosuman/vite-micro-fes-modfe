import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const Home = React.lazy(() => import("./HomePage"));
const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<>Loading</>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/page-1",
        element: (
          <Suspense fallback={<>Loading</>}>
            <Page1 />
          </Suspense>
        ),
      },
      {
        path: "/page-2",
        element: (
          <Suspense fallback={<>Loading</>}>
            <Page2 />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
