import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Directors",
    element: <Directors />,
  },
  {
    path: "/Actors",
    element: <Actors />,
  },
  {
    path: "/Movie",
    element: <Movie />,
  },
];

export default routes;
