import { Link } from 'react-router-dom'
import "./SessionsDay.css"

const SessionsDay = ({day, passSessionInfo}) =>{
    let weekday = ""

    switch(day.weekday){
        case "Domingo": {
            weekday = "Sunday"
            break;
        }
        case "Sábado": {
            weekday = "Saturday"
            break;
        }
        case "Segunda-feira": {
            weekday = "Monday"
            break;
        }
        case "Terça-feira": {
            weekday = "Tuesday"
            break;
        }
        case "Quarta-feira": {
            weekday = "Wednesday"
            break;
        }
        case "Quinta-feira": {
            weekday = "Thursday"
            break;
        }
        case "Sexta-feira": {
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
                {day.showtimes.map(session => {
                    return (
                    <Link key ={session.id} onClick = {() => passSessionInfo(day, session, weekday)} to = {`/seats/${session.id}`}>
                        <div className = "session">
                            <p>{session.name}</p> 
                        </div>
                    </Link>
                )})}
            </div>
        </div>
    )
}

export default SessionsDay