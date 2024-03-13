import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import GameDetails from "./components/GameDetails/GameDetails";
import Games from "./components/Games";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

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
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
