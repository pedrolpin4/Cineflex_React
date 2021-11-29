/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {IoStarOutline, IoStarSharp} from "react-icons/io5" 
import { getPlot } from '../services/imdb';
import { getInfo } from '../services/moviesService';
import '../styles/MoviesInfo.css'
import hourFactory from '../factories/hourFactory';
import Loading from '../components/Loading';
import styled from 'styled-components';
const MoviesInfo = () => {
    const {
        movieId
    } = useParams();
    const history = useHistory();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const listInfo = async () => {
        let plot = {
            plotOutline: {
                text: "",
            },
            genres: [],
            certificate: {
                US: [{}]
            }
        };
        const response = await getInfo(movieId);

        if(response.success) {
            plot = await getPlot(response.data.imdbId);
            console.log(plot.data.genres);
            setMovie({
                 ...response.data,
                plotOutline: plot.data.plotOutline.text,
                genres: plot.data.genres,
                certificate: plot.data.certificates["US"][0].certificate,
            })
            setIsLoading(false)
        }
    }

    useEffect(() => listInfo(), [])

    return(
        <>
            {
                isLoading ? 
                <Loading /> :  
                <>
                    <div className = "movie-container">
                        <a href = {`https://imdb.com/title/${movie.imdbId}`} target = "_blank" rel="noreferrer">
                            <img src = {movie.image} alt = {`${movie.title} web poster`} className = "movie-container__poster" />
                        </a>
                        <div className = "movie-info">
                            <a href = {`https://imdb.com/title/${movie.imdbId}`} target = "_blank" 
                                rel="noreferrer" className = "movie-info__title">
                                {movie.title} ({movie.year})
                            </a>
                            <p className = "movie-info__genres">{hourFactory(movie.runningTime)} - {movie.certificate} - 
                                {movie.genres.map((genre, i) => {
                                    if(i === movie.genres.length - 1) {
                                        return `${genre}`
                                    }

                                    return `${genre}, `
                                })}</p>
                            <div className = "movie-info__rating">
                                <div className = "movie-info__ratings--stars">
                                    <IoStarOutline size = {20} color = {"#e9d418"}/>
                                    <IoStarOutline size = {20} color = {"#e9d418"}/>
                                    <IoStarOutline size = {20} color = {"#e9d418"}/>
                                    <IoStarOutline size = {20} color = {"#e9d418"}/>
                                    <IoStarOutline size = {20} color = {"#e9d418"}/>
                                    <StarsInner rating = {Number(movie.rating).toFixed(1)}>
                                        <IoStarSharp size = {20} color = {"#e9d418"}/>
                                        <IoStarSharp size = {20} color = {"#e9d418"}/>
                                        <IoStarSharp size = {20} color = {"#e9d418"}/>
                                        <IoStarSharp size = {20} color = {"#e9d418"}/>
                                        <IoStarSharp size = {20} color = {"#e9d418"}/>
                                    </StarsInner>
                                </div>
                                <p>
                                    {Number(movie.rating).toFixed(1)}/10
                                </p>
                            </div>
                            <div className = "movie-info__basics">
                                <p className = "movie-info__running-time"></p>                            
                            </div>
                            <p className = "movie-info__plot">
                                {movie.plotOutline}
                            </p>
                        </div>
                    </div> 
                    <div className = "button-holder">   
                        <div className = "reserve-seats mb-small"  onClick = {() => history.push(`/sessions/${movieId}`)}>
                            Reserve Your seats!
                        </div> 
                    </div>
                </>
            }
        </>
    )
}

const StarsInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => (props.rating) * 10 + 1}%;
    white-space: nowrap;
    overflow: hidden;
    z-index: 2;
`

export default MoviesInfo