import PropTypes from "prop-types";
import FriendlistItem from "./FriendListItem";

const FriendList = ({ items }) => {
  return (
    <ul className="friend-list">
      {items.map((item) => (
        <FriendlistItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  items: PropTypes.array,
};

export default FriendList;
