import PropTypes from "prop-types";
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
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
