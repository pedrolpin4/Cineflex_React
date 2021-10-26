import './ConfirmationScreen.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const ConfirmationScreen = ({ tickets, buyers }) => {

    useEffect(() => console.log(buyers));

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
                <div className = "buyer-info" key = {`A${buyers.id}`}> 
                    <p>Nome do comprador: {buyers.name}</p>
                    <p>Cpf do comprador: {
                    buyers.cpf
                        .replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                        .replace(/(-\d{2})\d+?$/, '$1')
                    }</p>
                </div>
            </div>
            <Link to = "/">
                <div className = "return-home">Voltar para Home</div>
            </Link>
        </div>
    )
}

export default ConfirmationScreen