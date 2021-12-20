import PropTypes from "prop-types";
import StatItem from "../statItem/StatItem";
import { StatisticList } from "./StatList.styled";

const StatList = ({ items }) => {
  return (
    <StatisticList>
      {items.map((item) => (
        <StatItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </StatisticList>
  );
};

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatList;
