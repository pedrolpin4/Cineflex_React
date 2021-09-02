import './App.css';
import NavBar from '../NavBar/NavBar'
import MoviesList from '../MoviesList/MoviesList'
import TicketsSession from '../TicketsSession/TicketsSession'
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
          <TicketsSession />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
