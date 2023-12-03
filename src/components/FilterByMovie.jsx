/* eslint-disable react/prop-types */
import '../styles/layout/_filtermovie.scss';

const FilterByMovie = ({ movieFilter, handleChange }) => {
  const handleInput = (ev) => {
    handleChange(ev.target.value);
  };

  return (
    <section className="section_filtermovie">
      <label htmlFor="search_movie">
        <input
          className="section_filtermovie--input"
          type="text"
          name="search_movie"
          id="search_movie"
          placeholder="Escribe aquí un título"
          value={movieFilter}
          onChange={handleInput}
        />
      </label>
    </section>
  );
};
export default FilterByMovie;
