import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useChat from "../useChat";
import Navbar from "./Navbar";
import '../styles/Chat.css';

const ChatRoom = () => {
    const { roomId } = useParams();
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage, setNewMessage] = useState("");

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    }

    const handleSendMessage = () => {
        sendMessage(newMessage);
        console.log(newMessage);
        console.log(roomId);
        setNewMessage("");
    }


    return (
        <>
            <Navbar />
            <div className="chat-room-container">
            <h1>Room: {roomId}</h1>
            <div className="messages-container">
                <ol className="messages-list">
                    {messages.map((message, i) => (
                        <li
                            key={i}
                            className={`message-item ${
                                message.ownedByCurrentUser ? "my-message" : "received-message"
                            }`}
                        >
                            {message.body}
                        </li>
                    ))}
                </ol>
            </div>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Enter message"
                className="new-message-input-field"
            ></textarea>
            <button onClick={handleSendMessage} className="send-message-button">Enviar</button>
        </div>
        </>
    );
}

export default ChatRoom;