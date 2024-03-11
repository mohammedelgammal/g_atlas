import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import GameDetails from "./components/GameDetails/GameDetails";
import Games from "./components/Games";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Games /> },
      {
        path: "games/:id",
        element: <GameDetails />,
      },
    ],
  },
]);
