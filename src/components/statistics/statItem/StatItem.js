import PropTypes from "prop-types";
import { StatisticItem, ItemLabel, ItemPercentage } from "./StatItem.styled";

const StatItem = ({ label, percentage, id }) => {
  return (
    <StatisticItem key={id}>
      <ItemLabel>{label}</ItemLabel>
      <ItemPercentage>{percentage}%</ItemPercentage>
    </StatisticItem>
  );
};
StatItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatItem;
