import { Divider } from "@mui/material";

import { FriendsList } from "./FriendsList";
import { PATH } from "../../../utils/constants";
import { MainContentWrapper } from "./FriendsMainContent.styled";

const FriendsMainContent = () => {
  return (
    <MainContentWrapper>
      <FriendsList heading="Friend Requests" link={PATH.FRIENDS_REQUESTS} />
      <Divider orientation="horizontal" />
      <FriendsList heading="All Friends" link="https://google.com" />
    </MainContentWrapper>
  );
};

FriendsMainContent.displayName = "FriendsMainContent";

export default FriendsMainContent;
