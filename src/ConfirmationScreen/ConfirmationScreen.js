import './ConfirmationScreen.css'
import { Link } from 'react-router-dom'
const ConfirmationScreen = ({ tickets, buyers }) => {
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
                <h2>Compradores</h2>
                {buyers.map(buyer => (
                    <div className = "buyer-info" key = {`A${buyer.id}`}> 
                        <p className = "seat-number">Assento {buyer.id}</p>
                        <p>Nome do comprador: {buyer.name}</p>
                        <p>Cpf do comprador: {buyer.cpf}</p>
                    </div>
                ))}
            </div>
            <Link to = "/">
                <div className = "return-home">Voltar para Home</div>
            </Link>
        </div>
    )
}

export default ConfirmationScreen