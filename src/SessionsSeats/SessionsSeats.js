import axios from 'axios';
import { useEffect, useState } from 'react'
import Seat from './Seat/Seat';
import { Link } from 'react-router-dom';
import './SessionsSeats.css'

const SessionsSeats = ({ tickets, setTickets, buyer, setBuyer }) =>{
    const [cpf, setCpf] = useState("");
    const [buyersName, setBuyersName] = useState("");
    const [seats, setSeats] = useState([])

    useEffect(() =>{
        axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${tickets.session.id}/seats`)
            .then((res) => {
                setSeats([...res.data.seats]);
            })
            
    }, []) 

    return(
        <div className = "seats-page-content">
            <h1>Selecione o(s) assento(s)</h1>
            <ul className = "seats-container">
               {seats.map(seat =><Seat seat = {seat} tickets = {tickets} setTickets = {setTickets}/>)}
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
            <div className ="buyers-info">
                <p>Nome do comprador:</p>
                <input placeholder = "Digite seu nome..." 
                    onChange = {e => {
                        setBuyersName(e.target.value)
                    }}
                    value = {buyersName}
                    />
                <p>CPF do comprador:</p>
                <input placeholder = "Digite seu CPF..."
                    onChange = {e => {
                        setCpf(e.target.value)
                    }} 
                    value = {cpf}
                />
                <div className = "reserve-seats">Reservar assento(s)</div>
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