import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import Seat from './Seat/Seat';
import { useHistory, useParams } from 'react-router-dom';
import './SessionsSeats.css';
import weekDayFactory from '../factories/weekdayFactory';

const SessionsSeats = ({setTickets}) =>{
    const {
        sessionId
    } = useParams();

    const history = useHistory();
    const pageRef = useRef();
    const [seats, setSeats] = useState([]);
    const [sessionInfo, setSessionInfo] = useState({
        movie: {},
        session: {},
    })
    const [ids, setIds] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [errorMessageName, setErrorMessageName] = useState("");
    const [errorMessageCpf, setErrorMessageCpf] = useState("");

    const cpfMask = (cpf) => {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }

    const weekday = weekDayFactory(sessionInfo.session.weekday);

    useEffect(() =>{
        axios(`http://localhost:4000/sessions/${sessionId}/seats`)
            .then((res) => {
                setSeats([...res.data.seats]);
                setSessionInfo({...res.data})
            })
    }, [sessionId]);
    
    useEffect(() => {
        pageRef.current.scrollIntoView({behavior: 'smooth'})
    }, []);

    const passBuyersAndIdsInfo = (ids) => { 
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
            axios.post("http://localhost:4000/seats/bookmany", {
                buyers: ids.map( e => ({ name, cpf: cpf.replace(".", "").replace(".", "").replace("-", ""), id: e.id}))})
                .then(() => {
                    setTickets({
                        title: sessionInfo.movie.title,
                        date: sessionInfo.session.date,
                        hour: sessionInfo.session.hour,
                        seats: ids,
                        buyer: { name, cpf: cpf.replace(".", "").replace(".", "").replace("-", "") }
                    })
                    history.push("/success");
                })
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
                    <div className = "reserve-seats"  onClick = {() => passBuyersAndIdsInfo(ids)}>
                        Book now!
                    </div>
            </div>
            {<footer>
                <div className = "mini-poster">
                    <img src = {sessionInfo.movie.image} alt = ""/>
                </div>
                <div className = "sessions-info">
                    <p>{sessionInfo.movie.title}</p>
                    <p>{weekday} - {sessionInfo.session.hour}</p>
                </div>
            </footer>}
        </>    
    )
}

export default SessionsSeats