const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumuator, currentValue) => accumuator + currentValue.exercises,
    0
  );

  return <p>Total of {total} exercises</p>;
};

export default Total;