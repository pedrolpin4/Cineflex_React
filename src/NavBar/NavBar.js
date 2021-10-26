import { useHistory } from 'react-router'
import './NavBar.css'

const NavBar = () => {
    const history = useHistory();
    const pushHome = () => {
        history.push("/")
    }

    return(
        <header className = "nav-bar">
           <p onClick = {pushHome}>CINEFLEX</p> 
        </header>
    )
}

export default NavBar