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
import PrivateRoute from "../PrivateRoute";
import MyFood from "../MyFood/MyFood";
import Update from "../Update/Update";
import MyRequest from "../MyRequest";

import axios from "axios";
import Connect from "../Connect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <p className="text-center text-red-500">Server থেকে ডাটা আনতে সমস্যা হচ্ছে। একটু পরে চেষ্টা করুন।</p>,
    children: [
      {
        path: '/',
        loader: async () => {
          const res = await axios.get('https://server-side-topaz.vercel.app/featuredFood');
          return res.data;
        },
        // HydrateFallback: <Loading></Loading>,
        element: <Home></Home>,
        // errorElement: <p className="text-center text-red-500">Server থেকে ডাটা আনতে সমস্যা হচ্ছে। একটু পরে চেষ্টা করুন।</p>,
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
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/availableFood',
        loader: () => fetch('https://server-side-topaz.vercel.app/availableFood').then(res => res.json()),
        // HydrateFallback: <Loading></Loading>,
        element: <AvailableFood></AvailableFood>,

      },
      {
        path: '/viewDetails/:foodId',
        loader: ({ params }) => fetch(`https://server-side-topaz.vercel.app/details/${params.foodId}`).then(res => res),
        // HydrateFallback: <Loading></Loading>,
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: '/myFood',
        element: <PrivateRoute>
          <MyFood></MyFood>
        </PrivateRoute>
      },
    
      {
        path: '/update/:foodId',
        loader: ({ params }) => fetch(`https://server-side-topaz.vercel.app/details/${params.foodId}`),
        // HydrateFallback: <Loading></Loading>,
        element: <PrivateRoute><Update></Update></PrivateRoute>,
      },
      {
        path: '/myRequest',
        loader: () => fetch('https://server-side-topaz.vercel.app/request'),
        // HydrateFallback: <Loading></Loading>,
        element: <PrivateRoute><MyRequest></MyRequest></PrivateRoute>,
      },
      {
         path : 'connect', 
         element: <Connect></Connect>
      }
    ]
  },
]);