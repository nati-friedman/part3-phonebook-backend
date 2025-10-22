import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the name already exists in the phonebook
    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // add new name to phonebook
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
        })
      );
    }
  };

  // return filtered array of persons according to
  // the filter value (case-insensitive)
  const filterPersons = () => {
    return persons.filter((person) =>
      person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons().map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;