import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import Groups from "../Groups/Groups";
import Videos from "../Videos/Videos";
import { Friends, FriendsAll, FriendsRequests } from "../Friends";
import Confirmation from "../Confirmation/Confirmation";
import { PATH } from "../../utils/constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/:id",
    element: <Profile />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: PATH.FRIENDS,
    element: <Friends />,
  },
  {
    path: PATH.FRIENDS_REQUESTS,
    element: <FriendsRequests />,
  },
  {
    path: PATH.FRIENDS_ALL,
    element: <FriendsAll />,
  },
  {
    path: "watch",
    element: <Videos />,
  },
  {
    path: "groups",
    element: <Groups />,
  },
  {
    path: "feed",
    element: <div>Users</div>,
  },
  {
    path: "confirmation",
    element: <Confirmation />,
  },
]);

export const App = () => <RouterProvider router={router} />;
