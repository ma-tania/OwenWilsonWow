/* eslint-disable react/prop-types */
import "../styles/App.scss"
import "../styles/layout/_cards.scss"

const MovieItem = ({movie}) => {
return (
    <article className="item">
        <img className="item__img" src={movie.poster} alt={movie.title}/>
        <h3 className="item__title">{movie.title}</h3>
        <p className="item__fullLine">{movie.full_line}</p>
        <span className="item__year">{movie.year}</span>
    </article>
    )
};
export default MovieItem;