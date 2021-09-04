import './TicketsSession.css'
import axios from 'axios'
import { 
    useState, 
    useEffect,
 } from 'react'
import { Link } from 'react-router-dom'

const TicketsSession = ({ tickets, setTickets }) => {

    const [days, setDays] = useState([])

    useEffect(() => {
        axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${tickets.id}/showtimes`)
            .then((answer) => {
                setDays([...answer.data.days]);
            })
    },[])

    const passSessionInfo = (day, session) => {
        setTickets({...tickets,
        session: {
            id: session.id,
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
                <div key ={day.id}>
                    <h2>{day.weekday} - {day.date}</h2>
                    <div className = "sessions-container">
                        {day.showtimes.map(session => {
                            console.log(session);
                            return (
                            <Link onClick = {() => passSessionInfo(day, session)} to = {`/seats/${session.id}`}>
                                <div className = "session" key = {session.id}>
                                    {session.name}
                                </div>
                            </Link>
                        )})}
                    </div>
                </div>    
                ))}
            </div>
            <footer>
                <div className = "mini-poster">
                    <img src = {tickets.posterURL}/>
                </div>
                <p>{tickets.title}</p>
            </footer>
        </>
    )
}

export default TicketsSession