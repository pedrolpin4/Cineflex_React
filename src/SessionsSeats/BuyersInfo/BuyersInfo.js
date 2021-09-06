import "./BuyersInfo.css"

const BuyersInfo = ({ buyer, setBuyer, verifyBuyersAndIdsInfo}) => {
    
    return (
        <div className ="buyers-info">
            <p>Nome do comprador:</p>
            <input 
                placeholder = "Digite seu nome..." 
                onChange = {e => {setBuyer({...buyer, name: e.target.value})}}
                value = {buyer.name}
            />
            <p>CPF do comprador:</p>
            <input 
                placeholder = "Digite seu CPF..."
                onChange = {e => {
                    setBuyer({...buyer, cpf: e.target.value})
                    verifyBuyersAndIdsInfo()
                }}
                value = {buyer.cpf}
            />
       </div>
)}

export default BuyersInfo