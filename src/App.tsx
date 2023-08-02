import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [personName, setPersonName] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setPersonName(data.results[0].name);
        }
      });
  }, []);

  return (
    <div>
      <h1>{personName ? personName : 'Loading...'}</h1>
    </div>
  );
};

export default App;