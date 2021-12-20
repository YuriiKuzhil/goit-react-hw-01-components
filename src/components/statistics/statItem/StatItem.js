import PropTypes from "prop-types";
import { StatisticItem, ItemLabel, ItemPercentage } from "./StatItem.styled";

const StatItem = ({ label, percentage }) => {
  return (
    <StatisticItem>
      <ItemLabel>{label}</ItemLabel>
      <ItemPercentage>{percentage}%</ItemPercentage>
    </StatisticItem>
  );
};
StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatItem;
