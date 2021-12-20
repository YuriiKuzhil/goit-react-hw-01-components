import PropTypes from "prop-types";
import { List } from "./FriendList.styled";
import FriendlistItem from "./friendListItem/FriendListItem";

const FriendList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <FriendlistItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </List>
  );
};
FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
