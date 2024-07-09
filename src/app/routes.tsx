import { LogInPage } from "@pages/authentication/log-in"
import { SignUpPage } from "@pages/authentication/sign-up"
import { HomePage } from "@pages/site/index"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "log-in",
    element: <LogInPage />,
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
  }
])