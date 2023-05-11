import { createBrowserRouter } from "react-router-dom";
import Main from "../PageLayout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";

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
      }
    ]
  },

])

export default router