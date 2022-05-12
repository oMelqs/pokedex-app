import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";

export const configRoutes = [
  {
    title: "Home",
    pageName: "Home",
    path: "/",
    element: <Home />,
    private: false,
  },
  {
    title: "Pokemon",
    pageName: "Pokemon",
    path: "/:name",
    element: <Pokemon />,
    private: false,
  },
];
