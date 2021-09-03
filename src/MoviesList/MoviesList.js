import './MoviesList.css'
import MoviePoster from './MoviePoster/MoviePoster'
import axios from "axios";
import { useEffect, useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const [movieId, setMovieId] = useState("")

    useEffect(() => {
        axios("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
            .then((answer) => {
                setMovies([...answer.data]);
                console.log(answer.data);
                console.log(movies);
            })
    },[])
    

    const goToMovie = (movie) =>{
        console.log(movie.id);
        setMovieId(movie)
        return movieId
    }

   return(
        <div className = "movies-list-container">
            <h1>Selecione o filme</h1>
            <div className = "posters-container">
                {movies.map(movie => (
                    <MoviePoster 
                        movie = {movie}
                        movieId = {movieId}
                        setMovieId = {setMovieId}
                    />
                ))}
            </div>
        </div>
    )
}

export default MoviesList