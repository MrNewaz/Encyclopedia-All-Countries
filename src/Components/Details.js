import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
  const [country, setCountry] = useState({});
  let { id } = useParams();

  const {
    name,
    flag,
    nativeName,
    region,
    subregion,
    capital,
    population,
  } = country;
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [id]);
  console.log(country);
  return (
    <div className='Tapp'>
      <img height='100' src={flag} alt='' />
      <h1>
        {name} ({nativeName})
      </h1>
      <h3>
        Region: {region} ({subregion})
      </h3>
      <h3>Capital: {capital} </h3>
      <h3>Population: {population}</h3>
    </div>
  );
};

export default Details;
