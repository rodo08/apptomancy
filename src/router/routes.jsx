import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import FeaturedCard from "../components/FeaturedCard/FeaturedCard";
import Read from "../components/Read/Read";

const routes = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ],
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/card-of-the-day",
    element: <FeaturedCard />,
  },
];

export const router = createBrowserRouter(routes);
