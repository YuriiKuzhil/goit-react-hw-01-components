import { Card } from "./Profile.styled";
import ProfileDescription from "./profileDescription/ProfileDiscription";
import ProfileStats from "./profileStats/ProfileStats";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats followers={followers} views={views} likes={likes} />
    </Card>
  );
};

export default Profile;
