import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import SingleBook from "../pages/books/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
          path: "/books/:id",
          element: <SingleBook/>
        },
    ],
  },
]);

export default router;
