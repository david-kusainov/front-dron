import { HomePage } from "@pages/site"
import { LogInPage } from "@pages/authentication/log-in"
import { SignUpPage } from "@pages/authentication/sign-up/user"
import { ProfilePage } from "@pages/private-office/profile"
import { AreaArchivePage } from "@pages/private-office/area/archive"
import { createBrowserRouter } from "react-router-dom"
import { AreaCreatePage } from "@pages/private-office/area/create"
import { SignUpAdminPage } from "@pages/authentication/sign-up/admin"
import { AreaSinglePage } from "@pages/private-office/area/single"

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
    path: "sign-up/admin",
    element: <SignUpAdminPage />,
  },
  {
    path: "private-office/profile",
    element: <ProfilePage />,
  },
  {
    path: "private-office/area",
    element: <AreaArchivePage />,
  },
  {
    path: "private-office/area/create",
    element: <AreaCreatePage/>,
  },
  {
    path: "private-office/area/single",
    element: <AreaSinglePage/>,
  },
])