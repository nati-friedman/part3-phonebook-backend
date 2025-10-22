import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import AddForm from "./components/AddForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      });
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleChange={handleFilterChange} />

      <h3>Add a new</h3>
      <AddForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />

      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} />
    </div>
  );
};

export default App;