import './MoviesList.css'
import MoviePoster from './MoviePoster/MoviePoster';
import Loading from '../Loading';
import axios from "axios";
import { useEffect, useState } from 'react';

const MoviesList = ({tickets, setTickets}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
            .then((answer) => {
                setIsLoading(false)
                setMovies([...answer.data]);
            })
    },[])
    
   return(
        <div className = "movies-list-container">
            {
                isLoading ? 
                <Loading /> : 
                <>
                    <h1>Select the Movie</h1>
                    <div className = "posters-container">
                        {movies.map(movie => {
                            return(
                                <MoviePoster 
                                key = {movie.id}
                                movie = {movie}
                                setTickets = {setTickets}
                            />)
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export default MoviesList