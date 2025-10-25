const Anecdote = ({ heading, text, votes }) => {
  return (
    <>
    <h1>{heading}</h1>
    <p>
        {text}
        <br/>
        (Has {votes} votes)
    </p>
    </>
  )
}

export default Anecdote