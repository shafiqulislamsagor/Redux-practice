import App from "@/App";
import CounterPage from "@/layout/Counter";
import Login from "@/layout/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/counter", element: <CounterPage /> },
  { path: "/login", element: <Login /> },
]);
