import PropTypes from "prop-types";

import { PATH } from "../../../utils/constants/index";
import SubSidebarHeader from "./SubSidebarHeader/SubSidebarHeader";
import { SidebarWrapper } from "./FriendsSubSidebar.styled";

const FriendsSubSidebar = ({ heading }) => {
  return (
    <SidebarWrapper>
      <SubSidebarHeader heading={heading} link={PATH.FRIENDS} />
    </SidebarWrapper>
  );
};

FriendsSubSidebar.propTypes = {
  heading: PropTypes.any,
};

FriendsSubSidebar.displayName = "FriendsSubSidebar";

export default FriendsSubSidebar;
