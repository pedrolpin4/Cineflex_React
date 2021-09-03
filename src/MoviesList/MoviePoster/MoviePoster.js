import { Link } from 'react-router-dom';
import './MoviePoster.css'

const MoviePoster = ({ movie, movieId, setMovieId }) => {
    console.log(movieId);
    return (
        <Link  to = {`/${movieId}`}>
            <div onClick = {() => setMovieId(movie.id)} className = 'movie-poster' key = {movie.id}>
                <img src = {movie.posterURL} alt = ""/>
            </div>
        </Link>
    )
}

export default MoviePoster