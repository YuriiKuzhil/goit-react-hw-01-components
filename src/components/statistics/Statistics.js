import StatList from "./StatList";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <StatList items={stats} />
    </section>
  );
};
export default Statistics;
