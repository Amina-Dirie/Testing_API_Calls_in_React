import React, { useEffect, useState } from 'react';
import { fetchStarWarsPeople } from './components/api';

const App: React.FC = () => {
  const [data, setData] = useState<{ name: string }[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStarWarsPeople()
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (data && data.length > 0) {
    return <h1>{data[0].name}</h1>;
  }

  return null;
};

export default App;