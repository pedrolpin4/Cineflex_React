import axios from 'axios';
import { useEffect, useState } from 'react'
import './SessionsSits.css'

const SessionsSits = () =>{
    const [cpf, setCpf] = useState("");
    const [buyersName, setBuyersName] = useState("");
    useEffect(() =>{
        axios('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/1/seats')
    }, []) 

    return(
        <div className = "sits-page-content">
            <h1>Selecione o(s) assento(s)</h1>
            <div className = "sits-container"></div>
            <div className = "sits-status-container">
                <div>
                    <div className = "sits-status selected"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className = "sits-status available"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className = "sits-status unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className ="buyers-info">
                <p>Nome do comprador:</p>
                <input placeholder = "Digite seu nome..." 
                    onChange = {e => {
                        setBuyersName(e.target.value)
                    }}
                    value = {buyersName}
                    />
                <p>CPF do comprador:</p>
                <input placeholder = "Digite seu CPF..."
                    onChange = {e => {
                        setCpf(e.target.value)
                    }} 
                    value = {cpf}
                />
            </div>
            <footer>
                <div className = "mini-poster">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kekV1GGgplhQY1_KvaLVDa6ZGCoxcW18KHms8sMwl6tG28n8VXk0hN2mf_YChaam0DE&usqp=CAU"/>
                </div>
                <div className = "sessions-info">
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
        </div>
    )
}

export default SessionsSits