const Person = ({ person, deletePerson }) => {
  return (
    <div>
      <p>
        {person.name} {person.number}&nbsp;
        <span>
          <button onClick={() => deletePerson(person)}>delete</button>
        </span>
      </p>
    </div>
  );
};

export default Person;
