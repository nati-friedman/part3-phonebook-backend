import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;

  // no submissions made
  if (!total) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  // calculate average and positive percentage
  let avg = (1 * good - 1 * bad) / total;
  let positive = (good / total) * 100 + " %";

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={avg} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
