import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Directors",
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Actors",
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Movie",
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
