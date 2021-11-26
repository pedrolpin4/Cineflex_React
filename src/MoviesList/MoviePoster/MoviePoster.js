import { Link } from 'react-router-dom';
import './MoviePoster.css'

const MoviePoster = ({ movie }) => {
   
    return (
        <Link to = {`/sessions/${movie.id}`}>
            <div className = 'movie-poster'>
                <img src = {movie.image} alt = ""/>
            </div>
        </Link>
    )
}

export default MoviePoster