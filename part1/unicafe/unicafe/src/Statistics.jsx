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
  let positive = (good / total) * 100;

  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {avg}</p>
      <p>Positive: {positive} %</p>
    </>
  );
};

export default Statistics;
