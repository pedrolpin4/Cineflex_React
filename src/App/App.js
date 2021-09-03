import './App.css';
import NavBar from '../NavBar/NavBar'
import MoviesList from '../MoviesList/MoviesList'
import TicketsSessions from '../TicketsSessions/TicketsSessions'
import SessionsSeats from '../SessionsSeats/SessionsSeats';
import ConfirmationScreen from '../ConfirmationScreen/ConfirmationScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'
import { useState } from 'react';

function App() {
  
  const [ticket, setTicket] = useState({
      id: "",
      title: "",
      posterURL: "",
      session: {
        weekday: "",
        hour: ""
      },
      seats: []
  })

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path = "/" exact>
          <MoviesList />
        </Route>
        <Route path = "/sessions/:movieId" exact>
          <TicketsSessions />
        </Route>
        <Route path = "/seats/:sessionId" exact>
          <SessionsSeats />
        </Route>
        <Route path = "/confirmation-screen" exact>
          <ConfirmationScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
