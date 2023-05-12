import { createBrowserRouter } from "react-router-dom";
import Main from "../PageLayout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/signup',
        element:<SignUp/>
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader:({params})=>fetch(`http://localhost:4000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element:<PrivateRoute><Bookings/></PrivateRoute>
      }
    ]
  },

])

export default router