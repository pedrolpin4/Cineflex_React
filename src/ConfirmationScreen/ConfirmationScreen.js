import './ConfirmationScreen.css'
import { Link } from 'react-router-dom'

const ConfirmationScreen = ({ tickets }) => {

    return(
        <div className = "confirmation-container">
            <h1>Your order was<br/>successfully made!</h1>
            <div>
                <h2>Movie and session</h2>
                <p>{tickets.title}</p>
                <p>{tickets.date} - {tickets.hour}</p>
            </div>
            <div>
                <h2>Tickets</h2>
                {tickets.seats.map(seat => <p key = {seat.id}>Seat <span className = "white">{seat.name}</span></p>)}
            </div>
            <div>
                <h2>Buyer</h2>
                <div className = "buyer-info"> 
                    <p>Buyer's name: <span className = "white">{tickets.buyer.name}</span></p>
                    <p>Buyer's cpf: <span className = "white">{
                    tickets.buyer.cpf
                        .replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                        .replace(/(-\d{2})\d+?$/, '$1')
                    }</span></p>
                </div>
            </div>
            <Link to = "/">
                <div className = "return-home">Back Home</div>
            </Link>
        </div>
    )
}

export default ConfirmationScreen