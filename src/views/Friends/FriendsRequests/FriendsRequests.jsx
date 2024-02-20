import { Stack } from "@mui/material";

import { FriendsSubSidebar } from "../../../components/sidebars";
import { withLayout } from "../../../hooks/withLayout.jsx";

const FriendsRequestsPage = () => {
  return (
    <Stack width="100%" direction="row" height="calc(100vh - 54px)">
      <FriendsSubSidebar heading="Friend Requests" />
    </Stack>
  );
};

FriendsRequestsPage.displayName = "FriendsRequests";

const FriendsRequests = withLayout(FriendsRequestsPage);

export default FriendsRequests;
