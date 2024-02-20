import { Stack } from "@mui/material";

import { FriendsSubSidebar } from "../../../components/sidebars";
import { withLayout } from "../../../hooks/withLayout.jsx";

const FriendsAllPage = () => {
  return (
    <Stack width="100%" direction="row" height="calc(100vh - 54px)">
      <FriendsSubSidebar heading="All Friends" />
    </Stack>
  );
};

FriendsAllPage.displayName = "FriendsAll";

const FriendsAll = withLayout(FriendsAllPage);

export default FriendsAll;
