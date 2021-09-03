import axios from 'axios';
import { useEffect, useState } from 'react'
import './SessionsSeats.css'

const SessionsSeats = () =>{
    const [cpf, setCpf] = useState("");
    const [buyersName, setBuyersName] = useState("");
    const [seats, setSeats] = useState([]);
    const[seatStatus, setSeatStatus] = useState("available")


    useEffect(() =>{
        axios('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/12/seats')
            .then((res) => {
                setSeats(res.data.seats);
            })
    }, []) 

    return(
        <div className = "seats-page-content">
            <h1>Selecione o(s) assento(s)</h1>
            <div className = "seats-container">
                
                {seats.map(seat =>{

                    const verifyStatus = (seat) => {
                        if(!seat.isAvailable){
                            setSeatStatus("unavailable") 
                        } return setSeatStatus("available")
                    }
                
                    // verifyStatus(seat)
                    
                    const reserveSeat = () => {
                        if (seatStatus === "selected"){
                            setSeatStatus("available")
                        } else if(seatStatus === "available"){
                            setSeatStatus("selected")
                        } else setSeatStatus("unavailable")
                    }

                    return(
                        <div 
                            className = {`seat ${seatStatus}`} 
                            key = {seat.id}
                            onClick = {reserveSeat}
                        >
                        {seat.name}
                        </div>
                    )
                })}
            </div>
            <div className = "seats-status-container">
                <div>
                    <div className = "seats-status selected"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className = "seats-status available"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className = "seats-status unavailable"></div>
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
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kekV1GGgplhQY1_KvaLVDa6ZGCoxcW18KHms8sMwl6tG28n8VXk0hN2mf_YChaam0DE&usqp=CAU" alt = ""/>
                </div>
                <div className = "sessions-info">
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
        </div>
    )
}

export default SessionsSeats