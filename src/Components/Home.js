import React, { useEffect, useState } from 'react';
import Country from './Country';

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className='App'>
      {countries.map((country) => (
        <Country
          key={country.alpha2Code}
          country={country}
          alpha2Code={country.alpha2Code}
        />
      ))}
    </div>
  );
};

export default Home;
