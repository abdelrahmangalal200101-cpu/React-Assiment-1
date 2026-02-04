import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import House from "./Home/House";
import Blog from "./Blog/Blog";
import BlogDetatls from "./Blog/BlogDetatls";
import WeAre from "./WeAre/WeAre";
import NotFound from "./NotFound";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <House /> },
        {
          path: "blog",
          element: <Blog />,
          children: [{ path: ":slug", element: <BlogDetatls /> }],
        },
        { path: "weare", element: <WeAre /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}
