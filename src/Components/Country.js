import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
  const country = props.country;
  const code = props.alpha2Code;
  return (
    <div className='Tapp'>
      <img height='100' src={country.flag} alt='' />
      <h1>{country.name}</h1>
      <Link to={`/details/${code}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Country;
