import { Link } from 'react-router-dom';
import './MoviePoster.css'

const MoviePoster = ({ movie, setTickets }) => {
   
   const passMovieInfo = () => {
        setTickets({
            id: movie.id,
            title: movie.title,
            posterURL: movie.posterURL
        })
    }

    return (
        <Link onClick = {passMovieInfo} to = {`/sessions/${movie.id}`}>
            <div className = 'movie-poster'>
                <img src = {movie.posterURL} alt = ""/>
            </div>
        </Link>
    )
}

export default MoviePoster