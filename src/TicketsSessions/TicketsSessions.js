import './TicketsSessions.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const TicketsSessions = () => {

    const [days, setDays] = useState([])

    useEffect(() => {
        axios("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/1/showtimes")
            .then((answer) => {
                setDays([...answer.data.days]);
                console.log(answer.data.days);
                console.log(days);
            })
    },[])


    return(
        <>
            <h1>Selecione o Horário</h1>
            <div className = "tickets-page-content">
                {days.map(day => (
                <div key ={day.id}>
                    <h2>{day.weekday} - {day.date}</h2>
                    <div className = "sessions-container">
                        {day.showtimes.map(session => (
                        <div className = "session" key = {session.id}>{session.name}</div>
                        ))}
                    </div>
                </div>    
                ))}
            </div>
            <footer>
                <div className = "mini-poster">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kekV1GGgplhQY1_KvaLVDa6ZGCoxcW18KHms8sMwl6tG28n8VXk0hN2mf_YChaam0DE&usqp=CAU"/>
                </div>
                <p>Enola Holmes</p>
            </footer>
        </>
    )
}

export default TicketsSessions