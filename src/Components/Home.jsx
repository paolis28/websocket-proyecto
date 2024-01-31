// Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home(){

    const [roomName, setRoomName] = useState("");

    const handleRoomNameChange = (e)=>{
        setRoomName(e.target.value)
    }
    
    return(
        <div className="home-container">
            <input type="text"
            placeholder="Nombre de la sala"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input-field"/>

            <Link to={`/room/${roomName}`} className="enter-room-name-button">Unirse a sala</Link>
        </div>
    );
}

export default Home;
