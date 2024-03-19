import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPageScreen";
import GameDetails from "./pages/GameDetailsScreen";
import Games from "./pages/HomeScreen";
import Register from "./pages/RegisterScreen";
import Login from "./pages/LoginScreen";

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
