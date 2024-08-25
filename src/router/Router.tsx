import App from "@/App";
import CounterPage from "@/layout/Counter";
import CounterRedux from "@/layout/CounterRedux";
import Login from "@/layout/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/counter", element: <CounterPage /> },
  { path: "/login", element: <Login /> },
  { path: "/redux-counter", element: <CounterRedux /> },
]);
