import PropTypes from "prop-types";
import {
  Wrapper,
  Image,
  Name,
  Tag,
  Location,
} from "./ProfileDiscription.styled";

const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
    <Wrapper>
      <Image src={avatar} alt="User avatar" className="avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Wrapper>
  );
};

ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default ProfileDescription;
