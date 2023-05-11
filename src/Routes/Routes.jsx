import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../Layout/login/Login";
import Register from "../Layout/register/Register";
import CheckOut from "../pages/checkout/CheckOut";
import Bookings from "../pages/home/services/bookings/bookings/Bookings";
import PrivateRoutes from "../Providers/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/check-out/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/my-bookings',
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
    ]
  },
]);

export default router;