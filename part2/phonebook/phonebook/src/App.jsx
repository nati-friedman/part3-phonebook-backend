import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import AddForm from "./components/AddForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then((initialValues) => {
        setPersons(initialValues);
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
    const newPerson = {
        name: newName,
        number: newNumber,
      };
    // check if the name already exists in the phonebook
    const exists = persons.find(({ name }) => name === newName)

    if (exists) {
      // update phone number
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
          personService
            .update(exists.id, newPerson)
            .then((returnedPerson) => {
              setPersons(persons.map(person => {
                return person.id === returnedPerson.id ? returnedPerson : person
              }))
            })
      }
    } else {
      // add new person to phonebook
      personService
        .create(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
        });
    }
  };

  // delete a person form the persons array and db
  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteObject(person.id)
        .then(() => {
          setPersons(persons.filter((object) => object.id !== person.id));
        });
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
      <Persons
        filter={filter}
        persons={persons}
        deletePerson={deletePerson} />
    </div>
  );
};

export default App;