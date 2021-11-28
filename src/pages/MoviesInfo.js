/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {IoStarSharp} from "react-icons/io5" 
// import { getPlot } from '../services/imdb';
import { getInfo } from '../services/moviesService';
import '../styles/MoviesInfo.css'
const MoviesInfo = () => {
    const {
        movieId
    } = useParams();
    const [movie, setMovie] = useState({})

    const listInfo = async () => {
        // let plot = {
        //     plotOutline: {
        //         text: "",
        //     },
        //     genres: [],
        //     certificate: {
        //         US: [{}]
        //     }
        // };
        const response = await getInfo(movieId);

        if(response.success) {
            //plot = await getPlot(response.data.imdbId);
            setMovie({
                 ...response.data
                // plotOutline: plot.data.plotOutline.text,
                // genres: plot.data.genres,
                // certificate: plot.data.certificates["US"][0].certificate,
            })
        }
    }

    useEffect(() => listInfo(), [])

    return(
        <>
            {
                movie ? 
                    <div className = "movie-container">
                        <img src = {movie.image} alt = {`${movie.title} web poster`} className = "movie-container__poster"/>
                        <div className = "movie-info">
                            <h2 className = "movie-info__title">{movie.title} ({movie.year})</h2>
                            <div className = "movie-info__rating">
                                <IoStarSharp size = {20} color = {"#e9d418"}/>
                                <p>
                                    {movie.rating}/10 stars
                                </p>
                            </div>
                            <br />
                            <p className = "movie-info__running-time">Running time: {movie.runningTime} minutes</p>
                            <br />
                            <p className = "movie-info__plot">
                                Plot: 
                                When the menace known as the Joker wreaks 
                                havoc and chaos on the people of Gotham, Batman must accept one of the greatest 
                                psychological and physical tests of his ability to fight injustice.
                            </p>
                            <br />
                            <p className = "movie-info__genres">Genres: {["Action, ", "Crime, ", "Drama, ", "Thriller, "]}</p>
                            <br />
                            <p className = "movie-info__certificate">Certificate: PG-13</p>
                        </div>
                    </div> 
                :
                ""
            }
        </>
    )
}

export default MoviesInfo