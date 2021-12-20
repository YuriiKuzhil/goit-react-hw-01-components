import PropTypes from "prop-types";
import {
  FriendItem,
  ItemStatus,
  ItemImage,
  ItemName,
} from "./FriendListItem.styled";

const FriendlistItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <ItemStatus isOnline={isOnline}></ItemStatus>
      <ItemImage src={avatar} alt="User avatar" width="48" />
      <ItemName>{name}</ItemName>
    </FriendItem>
  );
};
FriendlistItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendlistItem;
