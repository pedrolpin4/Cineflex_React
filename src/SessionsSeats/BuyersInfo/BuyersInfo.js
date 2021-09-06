import { useEffect, useState } from "react"
import "./BuyersInfo.css"

const BuyersInfo = ({ id, buyers, setBuyers}) => {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

   const cpfMask = (cpf) => {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }

    useEffect(() => setBuyers([...buyers, {name: name, cpf: cpf, id: id}]), [buyers, id, cpf, name, setBuyers])

    return (
        <>
                <div className ="buyers-info" >
                    <h3>Assento {id}</h3>
                    <p>Nome do comprador:</p>
                    <input 
                        placeholder = "Digite seu nome..." 
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                    />
                    <p>CPF do comprador:</p>
                    <input 
                        placeholder = "Digite seu CPF..."
                        onChange = {e => setCpf(e.target.value)}
                        value = {cpfMask(cpf)}
                        pattern = "[0-9]{11}"
                    />
                </div>
        </>
    )
}

export default BuyersInfo