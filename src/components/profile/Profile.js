import PropTypes from "prop-types";
import { Card } from "./Profile.styled";

const Profile = ({ children }) => {
  return <Card>{children}</Card>;
};
Profile.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Profile;
