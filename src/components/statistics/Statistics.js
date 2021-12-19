import StatList from "./statList/StatList";
import { Section, Title } from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList items={stats} />
    </Section>
  );
};
export default Statistics;
