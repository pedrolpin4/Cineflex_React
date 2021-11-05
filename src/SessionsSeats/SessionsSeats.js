import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import Seat from './Seat/Seat';
import { useHistory } from 'react-router-dom';
import './SessionsSeats.css'

const SessionsSeats = ({ tickets, setTickets, buyers, setBuyers}) =>{
    const history = useHistory();
    const pageRef = useRef();
    const [seats, setSeats] = useState([]);
    const [ids, setIds] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [errorMessageName, setErrorMessageName] = useState("")
    const [errorMessageCpf, setErrorMessageCpf] = useState("")

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
    
    useEffect(() => {
        pageRef.current.scrollIntoView({behavior: 'smooth'})
    }, [])
    
    

    const passBuyersAndIdsInfo = (ids, buyers) => { 
        console.log(cpf.length, cpf);
        if(name.length < 3){
            setErrorMessageName("Your name must be at least 3 characters length")
        } else{
            setErrorMessageName("")
        }

        if(cpf.length < 14){
            setErrorMessageCpf("Your cpf must be a valid one!!")
        } else{
            setErrorMessageCpf("")
        }


        if(name.length >= 3 && cpf.length === 14){
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
    }

    return(
        <>
            <span ref = {pageRef}></span>
            <div className = "seats-page-content">
                <h1>Select the Seats</h1>
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
                        <p>Selected</p>
                    </div>
                    <div>
                        <div className = "seats-status available"></div>
                        <p>Available</p>
                    </div>
                    <div>
                        <div className = "seats-status unavailable"></div>
                        <p>Unavailable</p>
                    </div>
                </div>
                    <div className ="buyers-info" >
                        <p>Buyer's name:</p>
                        <input 
                            placeholder = "Type your name..." 
                            onChange = {e => setName(e.target.value)}
                            value = {name}
                        />
                        <p className = "error">{errorMessageName}</p>
                        <p>Buyer's cpf:</p>
                        <input 
                            placeholder = "Type your CPF..."
                            onChange = {e => setCpf(e.target.value)}
                            value = {cpfMask(cpf)}
                            pattern = "[0-9]{11}"
                        />
                        <p className = "error">{errorMessageCpf}</p>

                    </div>
                    <div className = "reserve-seats"  onClick = {() => passBuyersAndIdsInfo(ids, buyers)}>
                        Book now!
                    </div>
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
        </>    
    )
}

export default SessionsSeats