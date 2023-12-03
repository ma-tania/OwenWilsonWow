/* eslint-disable react/prop-types */
import '../styles/layout/_moviedetail.scss'
import { Link } from 'react-router-dom';

function MovieDetail ({movie}) {
    return (
        <article className="detail">
            <img className="detail__img" src={movie.poster} alt={movie.title}/>
                <h3>{movie.title}</h3>  
                <span>{movie.year}</span>
                <p className="detail__fullLine">{movie.full_line}</p>
                <span className='detail__timestamp'><i className="fa-regular fa-clock fa-bounce fa-xs"></i> Minuto de la escena {movie.timestamp}</span>
                <p className="detail__director"> <i className="fa-solid fa-clapperboard fa-2xs"></i> {movie.director}</p>
                <a className="detail__audio" href={movie.audio} title="Ir al audio" target="_blank" rel="noreferrer"><i className="fa-regular fa-circle-play fa-beat fa-2xs"></i> Escuchar audio </a>  
            <Link className="detail__back" to="/"><i className="fa-solid fa-arrow-right-to-bracket fa-rotate-180"></i> Volver </Link>
        </article>
    )
}

export default MovieDetail;