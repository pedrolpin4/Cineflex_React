import axios from 'axios';
import { useEffect, useState } from 'react'
import Seat from './Seat/Seat';
import { useHistory } from 'react-router-dom';
import './SessionsSeats.css'

const SessionsSeats = ({ tickets, setTickets, buyers, setBuyers}) =>{
    const history = useHistory();
    const [seats, setSeats] = useState([]);
    const [ids, setIds] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    const cpfMask = (cpf) => {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }

    useEffect(() =>{
        axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${tickets.session.id}/seats`)
            .then((res) => {
                setSeats([...res.data.seats]);
            })
            .catch(err => console.log(err))
    }, [tickets.session.id]) 

    const passBuyersAndIdsInfo = (ids, buyers) => {
        setBuyers({
            name, 
            cpf: cpf.replace(".", "").replace(".", "").replace("-", ""),
            ids: ids.map(seat => seat.id)
        })
        
        axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",
            {
                name, 
                cpf: cpf.replace(".", "").replace(".", "").replace("-", ""),
                ids: ids.map(seat => seat.id)
            })
            .then(() => {
                history.push("/success")
            })    
        setTickets({...tickets, seats: [...ids]});   
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
                <div className ="buyers-info" >
                    <p>Nome do comprador:</p>
                    <input 
                        placeholder = "Digite seu nome..." 
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                    />
                    <p>CPF do comprador:</p>
                    <input 
                        placeholder = "Digite seu CPF..."
                        onChange = {e => setCpf(e.target.value)}
                        value = {cpfMask(cpf)}
                        pattern = "[0-9]{11}"
                    />
                </div>
                <div className = "reserve-seats"  onClick = {() => passBuyersAndIdsInfo(ids, buyers)}>
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