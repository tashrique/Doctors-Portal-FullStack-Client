import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Appointment from "../../Pages/Appointment/Appointment";
import About from "../../Pages/About/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/reviews",
                element: <About></About>
            }
        ],
    },

]);


export default router;