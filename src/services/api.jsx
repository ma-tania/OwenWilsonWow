import uuid from 'react-uuid';

const getDataApi = () => {
    // Llamamos a la API
    return fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50') 
      .then((response) => response.json())
      .then((data) => {
        //limpiar los datos aquí
        const cleanData = data.map(movie =>{
        return{
        id: uuid(),
        poster: movie.poster,
        title: movie.movie,
        full_line: movie.full_line,
        year: movie.year,
        audio: movie.audio,
        director: movie.director,
        timestamp: movie.timestamp,
        };
      });
      return cleanData;
    });
  };
  
  export default getDataApi;