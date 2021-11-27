import { Link } from 'react-router-dom'
import "../styles/SessionsDay.css";
import weekDayFactory from '../factories/weekdayFactory';

const SessionsDay = ({ day }) =>{
    
    const weekday = weekDayFactory(day.weekday)
    
    
    return(
        <div key ={day.id}>
            <h2>{weekday} - {day.date}</h2>
            <div className = "sessions-container">
                {day.hours.map(session => {
                    return (
                    <Link key ={session.id} to = {`/seats/${session.id}`}>
                        <div className = "session">
                            <p>{session.hour}</p> 
                        </div>
                    </Link>
                )})}
            </div>
        </div>
    )
}

export default SessionsDay