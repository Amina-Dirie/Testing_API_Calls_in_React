export const fetchStarWarsPeople = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Error fetching Star Wars people: ' + error.message);
      } else {
        throw new Error('Unknown error occurred while fetching Star Wars people.');
      }
    }
  };