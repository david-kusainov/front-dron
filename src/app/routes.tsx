import { HomePage } from "@pages/site"
import { LogInPage } from "@pages/authentication/log-in"
import { SignUpPage } from "@pages/authentication/sign-up"
import { ProfilePage } from "@pages/private-office/profile"
import { AreaArchivePage } from "@pages/private-office/area/archive"
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
  },
  {
    path: "private-office/profile",
    element: <ProfilePage />,
  },
  {
    path: "private-office/area",
    element: <AreaArchivePage />,
  },
])