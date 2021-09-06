import { Link } from 'react-router-dom'
import "./SessionsDay.css"

const SessionsDay = ({day, passSessionInfo}) =>(
    <div key ={day.id}>
        <h2>{day.weekday} - {day.date}</h2>
        <div className = "sessions-container">
            {day.showtimes.map(session => {
                return (
                <Link key ={session.id} onClick = {() => passSessionInfo(day, session)} to = {`/seats/${session.id}`}>
                    <div className = "session">
                        <p>{session.name}</p> 
                    </div>
                </Link>
            )})}
        </div>
    </div>
)

export default SessionsDay