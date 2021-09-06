import "./BuyersInfo.css"

const BuyersInfo = ({ ids, buyer, setBuyer, verifyBuyersAndIdsInfo}) => {
    
    return (
    <>
        {ids.map((id,i) => (
            <div className ="buyers-info" key = {`cpf - ${i+1}`}>
                <h3>Assento {id}</h3>
                <p>Nome do comprador:</p>
                <input 
                    placeholder = "Digite seu nome..." 
                    onChange = {e => {setBuyer({...buyer, names: [...buyer.names, e.target.value]})}}
                    value = {buyer.names[i] ? buyer.names[i] : ""}
                />
                <p>CPF do comprador:</p>
                <input 
                    placeholder = "Digite seu CPF..."
                    onChange = {e => {
                        setBuyer({...buyer, cpfs: [...buyer.cpfs, e.target.value]})
                        verifyBuyersAndIdsInfo()
                    }}
                    value = {buyer.cpfs[i] ? buyer.cpfs[i] : ""}
                />
        </div>
        ))}
    </>
)}

export default BuyersInfo