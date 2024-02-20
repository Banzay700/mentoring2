import PropTypes from "prop-types";
import { HeaderWrapper } from "./SubSidebarHeader.styled";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ActionIconButton from "../../../buttons/ActionIconButton";

const SubSidebarHeader = ({ heading, link }) => {
  return (
    <HeaderWrapper>
      <Stack direction="row" alignItems="center" gap="12px">
        <Link to={link}>
          <ActionIconButton icon="arrowLeft" />
        </Link>
        <Stack>
          <Link to={link}>Friends</Link>
          <Typography fontWeight="600" fontSize="24px">
            {heading}
          </Typography>
        </Stack>
      </Stack>
    </HeaderWrapper>
  );
};

SubSidebarHeader.propTypes = {
  link: PropTypes.string,
  heading: PropTypes.string,
};

SubSidebarHeader.displayName = "SubSidebarHeader";

export default SubSidebarHeader;
