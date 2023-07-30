
import './App.css';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [person, setPerson] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people').then((response) => {
      
        return response.json();
      })
      .then((data) => {
        setPerson(data.results[0].name);
      })
     
  });

  return (
    <div>
        <h1>{person}</h1>
    </div>
  );
};

export default App;


