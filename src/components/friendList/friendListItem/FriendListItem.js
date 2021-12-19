import PropTypes from "prop-types";
import {
  FriendItem,
  ItemStatus,
  ItemImage,
  ItemName,
} from "./FriendListItem.styled";

const FriendlistItem = ({ id, isOnline, avatar, name }) => {
  return (
    <FriendItem key={id}>
      <ItemStatus isOnline={isOnline}></ItemStatus>
      <ItemImage src={avatar} alt="User avatar" width="48" />
      <ItemName>{name}</ItemName>
    </FriendItem>
  );
};
FriendlistItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendlistItem;
