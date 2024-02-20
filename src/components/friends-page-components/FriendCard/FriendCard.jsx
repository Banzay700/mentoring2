import PropTypes from "prop-types";
import { CardMedia, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { ButtonMain } from "../../buttons/index.jsx";
import { CardContentWrapper, CardWrapper } from "./FriendCard.styled.js";

const FriendCard = ({ fullName, image, onDelete, onConfirm }) => {
  return (
    <CardWrapper>
      <Box width="226px" height="208px">
        <CardMedia component="img" src={image} alt={fullName} />
      </Box>
      <CardContentWrapper>
        <Typography fontSize="17px" fontWeight="600" marginBottom="15px">
          {fullName}
        </Typography>
        <Stack gap="8px">
          <ButtonMain onClick={onConfirm}>Confirm</ButtonMain>
          <ButtonMain color="grey" onClick={onDelete}>
            Confirm
          </ButtonMain>
        </Stack>
      </CardContentWrapper>
    </CardWrapper>
  );
};

FriendCard.propTypes = {
  fullName: PropTypes.string,
  image: PropTypes.string,
  onDelete: PropTypes.func,
  onConfirm: PropTypes.func,
};

FriendCard.displayName = "FriendCard";

export default FriendCard;
