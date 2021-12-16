import StatItem from "./StatItem";

const StatList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map((item) => (
        <StatItem
          label={item.label}
          percentage={item.percentage}
          key={item.id}
        />
      ))}
    </ul>
  );
};
export default StatList;
