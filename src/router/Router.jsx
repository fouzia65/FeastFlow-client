import {
  createBrowserRouter

} from "react-router";
import MainLayout from "../Layout/MainLayout";
import SignIn from "../SignIn/SignIn";
import SignUp from "../Signup/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/signIn',
            element: <SignIn></SignIn>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        }
    ]
  },
]);