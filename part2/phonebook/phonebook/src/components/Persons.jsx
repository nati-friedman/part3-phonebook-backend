import Person from "./Person";

const Persons = ({ filter, persons }) => {
  // filter the array of persons according to
  // the filter value (case-insensitive)
  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return filteredPersons.map((person) => (
    <Person  key={person.name} person={person} />
  ));
};

export default Persons;