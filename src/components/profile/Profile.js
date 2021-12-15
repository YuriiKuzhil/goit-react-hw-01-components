import PropTypes from "prop-types";

const Profile = ({ children }) => {
  return <div className="profile">{children}</div>;
};
Profile.propTypes = {
  children: PropTypes.node,
};
export default Profile;
