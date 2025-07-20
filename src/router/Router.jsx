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
import Loading from "../loading";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p className="text-center text-red-500">Server থেকে ডাটা আনতে সমস্যা হচ্ছে। একটু পরে চেষ্টা করুন।</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const res = await axios.get('https://server-side-msrrg1p9a-fouzia-rahmans-projects.vercel.app/featuredFood');
          return res.data;
        },
        HydrateFallback: <Loading></Loading>,
        errorElement: <p className="text-center text-red-500">Server থেকে ডাটা আনতে সমস্যা হচ্ছে। একটু পরে চেষ্টা করুন।</p>,
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
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('https://server-side-msrrg1p9a-fouzia-rahmans-projects.vercel.app/availableFood').then(res => res.json()),
        HydrateFallback: <Loading></Loading>

      },
      {
        path: '/viewDetails/:foodId',
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-side-msrrg1p9a-fouzia-rahmans-projects.vercel.app/details/${params.foodId}`).then(res => res),
        HydrateFallback: <Loading></Loading>
      },
      {
        path: '/myFood',
        element: <PrivateRoute>
          <MyFood></MyFood>
        </PrivateRoute>
      },
      {
        path: '/update/:foodId',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-side-msrrg1p9a-fouzia-rahmans-projects.vercel.app/details/${params.foodId}`),
        HydrateFallback: <Loading></Loading>
      },
      {
        path: '/myRequest',
        element: <PrivateRoute><MyRequest></MyRequest></PrivateRoute>,
        loader: () => fetch('https://server-side-msrrg1p9a-fouzia-rahmans-projects.vercel.app/request'),
        HydrateFallback: <Loading></Loading>
      }
    ]
  },
]);