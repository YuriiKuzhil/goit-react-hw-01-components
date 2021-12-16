import PropTypes from "prop-types";

const StatItem = ({ label, percentage, id }) => {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
StatItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatItem;
