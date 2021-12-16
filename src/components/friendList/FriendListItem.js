import PropTypes from "prop-types";

const FriendlistItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
FriendlistItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendlistItem;
