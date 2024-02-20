import { FaUserPlus } from "react-icons/fa6";
import { PATH } from "../../../utils/constants";

export const sidebarItemsMap = [
  { title: "Home", icon: <FaUserPlus />, to: PATH.FRIENDS },
  { title: "Friend Requests", icon: <FaUserPlus />, to: PATH.FRIENDS_REQUESTS },
  { title: "All friends", icon: <FaUserPlus />, to: PATH.FRIENDS_ALL },
];
