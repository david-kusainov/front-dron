import { HomePage } from "@pages/site/index"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "log-in",
    // element: <Home />,
  },
  {
    path: "sign-up",
    // element: <Home />,
  }
])