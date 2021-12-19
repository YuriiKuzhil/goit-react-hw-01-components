import PropTypes from "prop-types";
import {
  ListStats,
  StatsItem,
  ItemLabel,
  ItemQuantity,
} from "./ProfileStats.styled";

const ProfileStats = ({ followers, views, likes }) => {
  return (
    <ListStats>
      <StatsItem>
        <ItemLabel>Followers</ItemLabel>
        <ItemQuantity>{followers}</ItemQuantity>
      </StatsItem>
      <StatsItem>
        <ItemLabel>Views</ItemLabel>
        <ItemQuantity>{views}</ItemQuantity>
      </StatsItem>
      <StatsItem>
        <ItemLabel>Likes</ItemLabel>
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
