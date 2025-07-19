import {
  createBrowserRouter

} from "react-router";
import MainLayout from "../Layout/MainLayout";
import SignIn from "../SignIn/SignIn";
import SignUp from "../Signup/SignUp";
import Home from "../Home/Home";
import AddFood from "../collection/AddFoods/AddFood";
import AvailableFood from "../collection/AvailableFood/AvailableFood";
import FoodDetails from "../collection/FoodDetails/FoodDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
        {
            path: '/signIn',
            element: <SignIn></SignIn>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
          path: '/addFoods',
          element: <AddFood></AddFood>
        },
        {
          path: '/availableFood',
          element: <AvailableFood></AvailableFood>,
          loader: () => fetch('http://localhost:3000/availableFood').then(res => res.json())
        },
        {
          path: '/viewDetails',
          element: <FoodDetails></FoodDetails>
        }
    ]
  },
]);