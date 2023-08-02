export const fetchStarWarsPeople = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      if (response.status === 500) {
        console.log(response);
        throw new Error('Oops... something went wrong, try again 🤕');
      }else if(response.status === 418){
        console.log(response);
        throw new Error("418 I'm a tea pot 🫖, silly");

      }
      const data = await response.json();
    //   console.log(data);
      
      return data;

    } catch (error: unknown) {
    //   console.log(error);

      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unknown error occurred while fetching Star Wars people.');
      }
    }
  };