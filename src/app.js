import './styles/app.css';
import NavBar from './components/NavBar'
import MoviesList from './pages/MoviesList'
import TicketsSession from './pages/TicketsSession'
import SessionsSeats from './pages/SessionsSeats';
import ConfirmationScreen from './pages/ConfirmationScreen'
import MoviesInfo from './pages/MoviesInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import  {useState } from 'react';

function App() {
  const [tickets, setTickets] = useState({
    buyer: {},
    seats: [],
  })

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path = "/" exact component = {MoviesList} />
        <Route path = "/info/:movieId" exact component = {MoviesInfo} />
        <Route path = "/sessions/:movieId" exact component = {TicketsSession} />
        <Route path = "/seats/:sessionId" exact>
          <SessionsSeats setTickets = {setTickets} />
        </Route>
        <Route path = "/success" exact>
          <ConfirmationScreen tickets = {tickets}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
