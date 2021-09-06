import './App.css';
import NavBar from '../NavBar/NavBar'
import MoviesList from '../MoviesList/MoviesList'
import TicketsSession from '../TicketsSession/TicketsSession'
import SessionsSeats from '../SessionsSeats/SessionsSeats';
import ConfirmationScreen from '../ConfirmationScreen/ConfirmationScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [tickets, setTickets] = useState({})

  const [buyer, setBuyer] = useState({
    names: [],
    cpfs: []
  })

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path = "/" exact>
          <MoviesList 
          tickets = {tickets}
          setTickets = {setTickets}
          />
        </Route>
        <Route path = "/sessions/:movieId" exact>
          <TicketsSession 
            tickets = {tickets}
            setTickets = {setTickets}
          />
        </Route>
        <Route path = "/seats/:sessionId" exact>
          <SessionsSeats 
            tickets = {tickets}
            setTickets = {setTickets}
            buyer = {buyer}
            setBuyer = {setBuyer}
          />
        </Route>
        <Route path = "/success" exact>
          <ConfirmationScreen 
            tickets = {tickets}
            buyer = {buyer}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
