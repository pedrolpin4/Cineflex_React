import './ConfirmationScreen.css'
import { Link } from 'react-router-dom'
const ConfirmationScreen = ({ tickets, buyer }) => {
    return(
        <div className = "confirmation-container">
            <h1>Pedido feito<br/>com sucesso!</h1>
            <div>
                <h2>Filme e sessão</h2>
                <p>{tickets.title}</p>
                <p>{tickets.session.date} - {tickets.session.hour}</p>
            </div>
            <div>
                <h2>Ingressos</h2>
                {tickets.seats.map(seat => <p key = {` seat ${seat}`}>Assento {seat}</p>)}
            </div>
            <div>
                <h2>Comprador</h2>
                <p>Nome: {buyer.name}</p>
                <p>CPF: {buyer.cpf}</p>
            </div>
            <Link to = "/">
                <div className = "return-home">Voltar para Home</div>
            </Link>
        </div>
    )
}

export default ConfirmationScreen