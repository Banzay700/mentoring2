import PropTypes from "prop-types";
import { FriendsListWrapper } from "./FriendsList.styled.js";
import { Stack, Typography, Link } from "@mui/material";
import { FriendCard } from "../../../../components/friends-page-components";

const FriendsList = ({ users, heading, link }) => {
  return (
    <FriendsListWrapper>
      <Stack direction="row" justifyContent="space-between" marginBottom="20px">
        <Typography fontSize="20px" fontWeight="700">
          {heading}
        </Typography>
        <Link href={link} underline="none">
          All
        </Link>
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap="20px">
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
        <FriendCard fullName="John Wick" image="https://picsum.photos/200" />
      </Stack>
    </FriendsListWrapper>
  );
};

FriendsList.propTypes = {
  users: PropTypes.array,
  heading: PropTypes.string,
  link: PropTypes.string,
};

FriendsList.displayName = "FriendsList";

export default FriendsList;
