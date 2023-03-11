import React, { useState, useEffect } from 'react';
import data from './data.json';
import './App.css';

const Data = () => {
  const [companies, setCompanies] = useState([]);
  const [educations, setEducations] = useState([])

  useEffect(() => {
    setCompanies(data.companies);
    setEducations(data.educations);
  }, [],[]);

  return (
    <div className='data'>
      <ul>
      <h1>Experience: </h1>
        {companies.map(item => (
          <div key={item.companyName}>
            <h2>Company - {item.companyName}</h2>
            <h3>{item.city}  {item.duration}</h3>
            <p>{item.description}</p>
            </div>
    ))
    }
      </ul>
      <ul>
        <h2>Education: </h2>
        {educations.map(item => (
            <div key={item.school}>
                <h2>{item.school}</h2>
                <h3>{item.city} {item.duration} {item.status}</h3>
                <p>{item.description}</p>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Data;