import { Link } from 'react-router-dom';
import './MoviePoster.css'

const MoviePoster = ({ movie, tickets, setTickets }) => {
    console.log(movie);
   
   const passMovieInfo = () => {
        setTickets({
            id: movie.id,
            title: movie.title,
            posterURL: movie.posterURL
        })

        console.log(tickets);
    }

    return (
        <Link onClick = {passMovieInfo} to = {`/sessions/${movie.id}`}>
            <div className = 'movie-poster' key = {movie.id}>
                <img src = {movie.posterURL} alt = ""/>
            </div>
        </Link>
    )
}

export default MoviePoster