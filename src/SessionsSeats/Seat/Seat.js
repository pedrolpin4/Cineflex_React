import { useState, useEffect } from "react";
import "./Seat.css";

const Seat = ({seat, tickets, setTickets}) => {
    const [seatsStatus, setSeatsStatus] = useState("available");

    const verifyStatus = () => {
        setSeatsStatus(seat.isAvailable ? "available" : "unavailable")
    }

    const reserveSeat = () => {
        if(seatsStatus === "available"){
            setSeatsStatus("selected")
            console.log(tickets);
        } else if(seatsStatus === "selected"){
            setSeatsStatus("available")
        }
    }

    useEffect(verifyStatus, []);

    return( <li 
        className = {`seat ${seatsStatus}`} 
        key = {seat.id}
        onClick = {reserveSeat}
        >
            {seat.name}
        </li>
    )
}

export default Seat