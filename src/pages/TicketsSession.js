/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/TicketsSession.css'
import { 
    useState, 
    useEffect,
 } from 'react'
import SessionsDay from '../components/SessionsDay'
import { useParams } from 'react-router'
import sessionFactory from '../factories/sessionFactory'
import { getSessions } from '../services/moviesService'

const TicketsSession = () => {
    const {
        movieId
    } = useParams();

    const [sessions, setSessions] = useState({
        movie: {}
    });
    const [sessionsDays, setSessionsDays] = useState([]);
    

    const listSessions = async () => {
        const answer = await getSessions(movieId);

        if(answer.success) {
            setSessions(answer.data);

            const acumulator = sessionFactory(answer)
            setSessionsDays([...acumulator]);
            return;
        }
        
    }

    useEffect(() => listSessions(), []);

    return(
        <div className = "h1-holder">
            <h1>Select the Session</h1>
            <div className = "tickets-page-content">
                {sessionsDays.map((day) => (
                    <SessionsDay 
                        day = {day}
                        key = {day.id}
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