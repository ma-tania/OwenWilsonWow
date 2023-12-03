// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import getDataApi from '../services/api';
import Header from './Header';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import Filters from './Filters';
import '../styles/App.scss';
import ls from '../services/ls';
import MovieDetail from './MovieDetail';


const App = () => {
  // Estados

  const [movies, setMovies] = useState(ls.get("movies", []));
  const [movieFilter, setMovieFilter] = useState('');
  const [movieFilterYear, setMovieFilterYear] = useState('');

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    
      const dataLS = ls.get("movies", null)
      if (dataLS === null){
        getDataApi().then((cleanData) => {
          setMovies(cleanData);
          ls.set("movies", cleanData);
      });
    }
  }, []);

  const handleChange = (value) => {
    setMovieFilter(value);
  };

  const handleChangeYear = (value) => {
    setMovieFilterYear(value);
  };

  //peliculas filtradas
  const filteredMovies = movies
    //por nombre
    .filter((movie) => movie.title.toLowerCase().includes(movieFilter))
    //por año
    .filter((movie) => {
      if (movieFilterYear === '') {
        return true;
      } else {
        return movieFilterYear === movie.year.toString();
      }
    });
  const years = movies.map((movie) => movie.year);

  const getYears = () => {
    const years = movies.map((movie) => movie.year); //array con los años
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    return uniquesArray;
  };

  //encontrar id 
  const { pathname } = useLocation();
  const routeData = matchPath("/movie/:id", pathname);
  const movieId = routeData !==null ? routeData.params.id: "";
  const movieData = movies.find(movie => movie.id === movieId);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <Filters
                  movieFilter={movieFilter}
                  handleChange={handleChange}
                  movieFilterYear={movieFilterYear}
                  handleChangeYear={handleChangeYear}
                  years={getYears()}
                />

                <MovieList movies={filteredMovies} />
              </section>
            }
          />
          <Route 
          path="/movie/:id" 
          element={ 
          <>
          <MovieDetail movie={movieData}/>
          </>
          }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;

/*ruta principal : /
ruta para cada usuario: /user/id */
