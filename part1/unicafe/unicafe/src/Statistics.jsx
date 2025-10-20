const Statistics = ({ good, neutral, bad }) => {
  // calculate total, average and positive percentage
  let total = good + neutral + bad;
  let avg = (1 * good - 1 * bad) / total;
  let positive = (good / total) * 100;

  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {/* show only if the numbers are valid */}
      <p>Average: {avg ? avg : 0}</p>
      <p>Positive: {positive ? positive : 0} %</p>
    </>
  );
};

export default Statistics;