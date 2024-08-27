import App from "@/App";
import CounterPage from "@/layout/Counter";
import CounterRedux from "@/layout/CounterRedux";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/counter", element: <CounterPage /> },
  { path: "/redux-counter", element: <CounterRedux /> },
]);
