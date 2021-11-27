import '../styles/MoviesList.css'
import MoviePoster from '../components/MoviePoster';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { getMovies } from '../services/moviesService';

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const listMovies = async () => {
        setIsLoading(true)
        const response = await getMovies();

        if(response.success){
            setIsLoading(false)
            setMovies(response.data)
        }
    }

    useEffect(() => listMovies() ,[])
    
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