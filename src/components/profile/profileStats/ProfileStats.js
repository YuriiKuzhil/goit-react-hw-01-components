import PropTypes from "prop-types";
import { ListStats, StatsItem, ItemQuantity } from "./ProfileStats.styled";

const ProfileStats = ({ followers, views, likes }) => {
  return (
    <ListStats>
      <StatsItem>
        <span>Followers</span>
        <ItemQuantity>{followers}</ItemQuantity>
      </StatsItem>
      <StatsItem>
        <span>Views</span>
        <ItemQuantity>{views}</ItemQuantity>
      </StatsItem>
      <StatsItem>
        <span>Likes</span>
        <ItemQuantity>{likes}</ItemQuantity>
      </StatsItem>
    </ListStats>
  );
};
ProfileStats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
export default ProfileStats;
