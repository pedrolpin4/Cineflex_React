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
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path = "/a" exact>
          <MoviesList />
        </Route>
        <Route path = "/b" exact>
          <TicketsSessions />
        </Route>
        <Route path = "/c" exact>
          <SessionsSeats />
        </Route>
        <Route path = "/" exact>
          <ConfirmationScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
