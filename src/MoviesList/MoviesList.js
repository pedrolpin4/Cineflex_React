import './MoviesList.css'
import axios from "axios";
import { useEffect, useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
            .then((answer) => {
                setMovies([...answer.data]);
                console.log(answer.data);
                console.log(movies);
            })
    },[])
    

   return(
        <>
            <h1>Selecione o horário</h1>
            <div className = "posters-container">
                {movies.map(movie => (
                    <div className = 'movie-poster' key = {movie.id}>
                        <img src = {movie.posterURL} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default MoviesList