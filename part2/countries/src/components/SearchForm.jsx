const SearchForm = ({ query, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Find countries..."
      />
      <button type="submit">Find</button>
    </form>
  );
};

export default SearchForm;
