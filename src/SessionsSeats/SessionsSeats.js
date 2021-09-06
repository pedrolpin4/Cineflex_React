import axios from 'axios';
import { useEffect, useState } from 'react'
import Seat from './Seat/Seat';
import BuyersInfo from './BuyersInfo/BuyersInfo';
import { Link } from 'react-router-dom';
import './SessionsSeats.css'

const SessionsSeats = ({ tickets, setTickets, buyer, setBuyer }) =>{
    const [seats, setSeats] = useState([]);
    const [ids, setIds] = useState([]);
    const [statusPage, setStatusPage] = useState("");

    new RegExp("/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/")

    useEffect(() =>{
        axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${tickets.session.id}/seats`)
            .then((res) => {
                setSeats([...res.data.seats]);
            })
            
    }, []) 

    const passBuyersAndIdsInfo = (ids, cpf, name) => {
        axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",
            {ids, name, cpf})
                .then(console.log("deu bom"))
                .catch("deu ruim")
            setTickets({...tickets, seats: [...ids]});
    }

    const verifyBuyersAndIdsInfo = () =>{
        console.log(!!RegExp(buyer.cpf));
    }

    return(
        <div className = "seats-page-content">
            <h1>Selecione o(s) assento(s)</h1>
            <ul className = "seats-container">
               {seats.map(seat =>(
                    <Seat 
                    key = {seat.name}
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
            verifyBuyersAndIdsInfo = {verifyBuyersAndIdsInfo}
            />

            <Link 
                to = {`/success`}
                onClick = {() => passBuyersAndIdsInfo(ids, buyer.name, buyer.cpf)}
            >
                <div className = "reserve-seats">
                    Reservar assento(s)
                </div>
            </Link>

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