import { useState } from "react";
import countryService from "./services/countries";
import SearchForm from "./components/SearchForm";
import CountryList from "./components/CountryList";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState(null);
  const allCountries = countryService.getAll();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // filter the countries according to the
    // query value (case-insensitive)
    const filterdCountries = allCountries.filter((country) => {
      country.name.common.toLowerCase().includes(query.toLocaleLowerCase());
    });

    setCountries(filterdCountries);
  };

  return (
    <div>
      <SearchForm
        search={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <CountryList countries={countries} />
    </div>
  );
};

export default App;