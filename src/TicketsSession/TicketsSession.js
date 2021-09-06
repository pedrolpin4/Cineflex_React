import './TicketsSession.css'
import axios from 'axios'
import { 
    useState, 
    useEffect,
 } from 'react'
import SessionsDay from './SessionsDay/SessionsDay'

const TicketsSession = ({ tickets, setTickets }) => {

    const [days, setDays] = useState([])

    useEffect(() => {
        axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${tickets.id}/showtimes`)
            .then((answer) => {
                setDays([...answer.data.days]);
            })
    },[tickets.id])

    const passSessionInfo = (day, session) => {
        setTickets({...tickets,
        session: {
            id: session.id,
            date: day.date,
            weekday: day.weekday,
            hour: session.name
        }
    } )
    }

    return(
        <>
            <h1>Selecione o Horário</h1>
            <div className = "tickets-page-content">
                {days.map(day => (
                    <SessionsDay 
                        key = {day.id}
                        day = {day}
                        passSessionInfo = {passSessionInfo}
                    />    
                ))}
            </div>
            <footer>
                <div className = "mini-poster">
                    <img src = {tickets.posterURL} alt = ""/>
                </div>
                <p>{tickets.title}</p>
            </footer>
        </>
    )
}

export default TicketsSession