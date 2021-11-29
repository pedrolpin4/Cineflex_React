import { Link } from 'react-router-dom';
import '../styles/MoviePoster.css'

const MoviePoster = ({ movie }) => {
   
    return (
        <Link to = {`/info/${movie.id}`}>
            <div className = 'movie-poster'>
                <img src = {movie.image} alt = ""/>
            </div>
        </Link>
    )
}

export default MoviePoster