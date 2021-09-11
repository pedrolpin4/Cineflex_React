import { useState, useEffect } from "react";
import "./Seat.css";

const Seat = ({seat, ids, setIds}) => {
    const [seatsStatus, setSeatsStatus] = useState("available");

    const verifyStatus = () => {
        setSeatsStatus(seat.isAvailable ? "available" : "unavailable")
    }

    const reserveSeat = () => {
        if(seatsStatus === "available"){
            setSeatsStatus("selected")
            setIds([...ids, seat.id])
        } else if(seatsStatus === "selected"){
            setSeatsStatus("available")
            setIds(ids.filter(element => element !== seat.id))    
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