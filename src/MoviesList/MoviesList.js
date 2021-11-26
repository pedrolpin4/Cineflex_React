import './MoviesList.css'
import MoviePoster from './MoviePoster/MoviePoster';
import Loading from '../Loading';
import axios from "axios";
import { useEffect, useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios("http://localhost:4000/movies")
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
                            />)
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export default MoviesList