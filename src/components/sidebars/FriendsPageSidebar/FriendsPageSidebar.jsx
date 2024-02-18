import { Divider, Stack, Typography } from "@mui/material";

import { FriendsSettingsPopover } from "./FriendsSettingsPopover";
import { FriendsSidebarItem } from "./FriendsSidebarItem";
import { sidebarItemsMap } from "./FriendsPageSidebar.utils";
import {
  SidebarHeaderWrapper,
  SidebarWrapper,
} from "./FriendsPageSidebar.styled";

const FriendsPageSidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeaderWrapper>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Typography fontSize="24px" fontWeight="600">
            Friends
          </Typography>
          <FriendsSettingsPopover />
        </Stack>
      </SidebarHeaderWrapper>
      <Stack gap="2px" marginTop="8px">
        {sidebarItemsMap.map((item) => (
          <FriendsSidebarItem key={item.to} {...item} />
        ))}
      </Stack>
      <Divider orientation="horizontal" sx={{ my: "8px" }} />
      <Typography fontSize="17px" fontWeight="500">
        New friends
      </Typography>
    </SidebarWrapper>
  );
};

FriendsPageSidebar.displayName = "FriendsPageSidebar";

export default FriendsPageSidebar;
