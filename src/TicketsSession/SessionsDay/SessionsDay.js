import { Link } from 'react-router-dom'
import "./SessionsDay.css"

const SessionsDay = ({ day }) =>{
    
    let weekday = ""

    switch(day.weekday){
        case 0: {
            weekday = "Sunday"
            break;
        }
        case 1: {
            weekday = "Saturday"
            break;
        }
        case 2: {
            weekday = "Monday"
            break;
        }
        case 3: {
            weekday = "Tuesday"
            break;
        }
        case 4: {
            weekday = "Wednesday"
            break;
        }
        case 5: {
            weekday = "Thursday"
            break;
        }
        case 6: {
            weekday = "Friday"
            break;
        }
        default:{
            weekday = "none"
            break;
        } 
    }
    
    
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