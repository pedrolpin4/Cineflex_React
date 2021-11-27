import { useState, useEffect } from "react";
import "../styles/Seat.css";

const Seat = ({seat, ids, setIds}) => {
    const [seatsStatus, setSeatsStatus] = useState("available");

    const verifyStatus = () => {
        setSeatsStatus(seat.isSelected ? "unavailable" : "available")
    }

    const reserveSeat = () => {
        if(seatsStatus === "available"){
            setSeatsStatus("selected")
            setIds([...ids, {id: Number(seat.id), name: seat.name}])
        } else if(seatsStatus === "selected"){
            setSeatsStatus("available")
            setIds(ids.filter(element => element.id !== Number(seat.id)))    
        }
    }

    useEffect(verifyStatus, [seat.isSelected]);

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