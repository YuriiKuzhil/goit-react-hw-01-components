import StatItem from "../statItem/StatItem";
import { StatisticList } from "./StatList.styled";

const StatList = ({ items }) => {
  return (
    <StatisticList>
      {items.map((item) => (
        <StatItem
          label={item.label}
          percentage={item.percentage}
          key={item.id}
        />
      ))}
    </StatisticList>
  );
};
export default StatList;
