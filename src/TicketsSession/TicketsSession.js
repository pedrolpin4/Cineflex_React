import './TicketsSession.css'
import axios from 'axios'
import { 
    useState, 
    useEffect,
 } from 'react'
import SessionsDay from './SessionsDay/SessionsDay'
import { useParams } from 'react-router'

const TicketsSession = () => {

    const {
        movieId
    } = useParams();

    const [sessions, setSessions] = useState({
        movie: {}
    });
    const [sessionsDays, setSessionsDays] = useState([]);
    console.log(sessions);

    useEffect(() => {
        axios(`http://localhost:4000/movies/${movieId}/sessions`)
            .then((answer) => {
                setSessions(answer.data);
                let acumulator = [];

                answer.data.sessions.forEach(e => {
                    if(acumulator.some(acum => acum.date === e.date)) {
                        acumulator.map(acum => {
                            if(acum.date === e.date){
                                return ({
                                    id: e.id,
                                    date: acum.date,
                                    weekday: acum.weekday,
                                    hours: acum.hours.push({
                                        id: e.id,
                                        hour: e.hour,
                                    }),
                                })
                            }

                            return acum;
                        })
                        return;
                    }

                    acumulator.push({
                        id: e.id,
                        date: e.date,
                        weekday: e.weekday,
                        hours: [{
                            id: e.id,
                            hour: e.hour,
                        }],
                    })
                });

                setSessionsDays([...acumulator]);
            });
    }, [movieId]);

    return(
        <div className = "h1-holder">
            <h1>Select the Session</h1>
            <div className = "tickets-page-content">
                {sessionsDays.map((day) => (
                    <SessionsDay 
                        day = {day}
                    />    
                ))}
            </div>
                <footer>
                    <div className = "mini-poster">
                        <img src = {sessions  ? sessions?.movie.image : ""} alt = ""/>
                    </div>
                    <p>{sessions ? sessions?.movie.title : ""}</p>
                </footer>
        </div>
    )
}

export default TicketsSession