import './App.css';
import NavBar from '../NavBar/NavBar'
import MoviesList from '../MoviesList/MoviesList'
import TicketsSessions from '../TicketsSessions/TicketsSessions'
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
        <Route path = "/" exact>
          <TicketsSessions />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
