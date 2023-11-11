import { createBrowserRouter } from "react-router-dom";
import MainLeaout from "../Leaout/MainLeaout";
import Home from "../Page/Home";
import Login from "../Page/Login";
// import Registation from "../Page/Registation";
import CreateAsserment from "../Page/CreateAsserment";
import Registation from "../Page/Registation";
import MyAsserment from "../Page/MyAsserment";
import PrivetRoute from "../Page/PrivetRoute";
import Update from "../Component/Update";
import AllAserment from "../Page/AllAserment";
import ViewBtn from "../Component/ViewBtn";
import PandingCard from "../Page/PandingCard";
import Marks from "../Page/Marks";
import MyconfarmCard from "../Page/MyconfarmCard";
import ErrorPage from "../Page/ErrorPage";

const MyCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLeaout></MainLeaout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/crate",
        element: (
          <PrivetRoute>
            <CreateAsserment></CreateAsserment>
          </PrivetRoute>
        ),
      },
      {
        path: "/allaserment",
        element: <AllAserment></AllAserment>,
      },
      {
        path: "/myasserment",
        element: <MyAsserment></MyAsserment>,
        loader: () => fetch("https://online-grup-study-server.vercel.app/users",),
      },
      {
        path:"/myconfarmcard/:id",
        element:<PrivetRoute><MyconfarmCard></MyconfarmCard></PrivetRoute>,
        loader:({ params }) =>
          fetch(`https://online-grup-study-server.vercel.app/users/${params.id}`)
        
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://online-grup-study-server.vercel.app/users/${params.id}`),
      },
      {
        path: "/view/:id",
        element: <ViewBtn></ViewBtn>,
        loader: ({ params }) =>
          fetch(`https://online-grup-study-server.vercel.app/users/${params.id}`),
      },
      {
        path: "/panding/:id",
        element: <PandingCard></PandingCard>,
        loader: ({ params }) =>
        fetch(`https://online-grup-study-server.vercel.app/users/${params.id}`),
      },
      {
        path:"/marks",
        element:<Marks></Marks>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/reg",
    element: <Registation></Registation>,
  },
]);

export default MyCreateRouter;
