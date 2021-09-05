import axios from 'axios';
import { useEffect, useState } from 'react'
import Seat from './Seat/Seat';
import BuyersInfo from './BuyersInfo/BuyersInfo';
import { Link } from 'react-router-dom';
import './SessionsSeats.css'

const SessionsSeats = ({ tickets, setTickets, buyer, setBuyer }) =>{
    const [seats, setSeats] = useState([]);
    const [ids, setIds] = useState([]);

    useEffect(() =>{
        axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${tickets.session.id}/seats`)
            .then((res) => {
                setSeats([...res.data.seats]);
            })
            
    }, []) 

    const passBuyersAndIdsInfo = (ids, cpf, name) =>{
        axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",
        {ids, name, cpf}
        )
        setTickets({...tickets, seats: [...ids]})
        console.log(tickets, buyer);
    }

    return(
        <div className = "seats-page-content">
            <h1>Selecione o(s) assento(s)</h1>
            <ul className = "seats-container">
               {seats.map(seat =>(
                    <Seat 
                    seat = {seat} 
                    ids = {ids} 
                    setIds = {setIds}/>)
               )}
            </ul>
            <div className = "seats-status-container">
                <div>
                    <div className = "seats-status selected"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className = "seats-status available"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className = "seats-status unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>

            <BuyersInfo 
            buyer = {buyer}
            setBuyer = {setBuyer}
            />

            <div className = "reserve-seats" 
            onClick = {() => passBuyersAndIdsInfo(ids, buyer.name, buyer.cpf)}
            >
                Reservar assento(s)
            </div>

            <footer>
                <div className = "mini-poster">
                    <img src = {tickets.posterURL} alt = ""/>
                </div>
                <div className = "sessions-info">
                    <p>{tickets.title}</p>
                    <p>{tickets.session.weekday} - {tickets.session.hour}</p>
                </div>
            </footer>
        </div>
    )
}

export default SessionsSeats