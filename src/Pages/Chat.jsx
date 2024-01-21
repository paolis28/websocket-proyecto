/*https://www.youtube.com/watch?v=Yi2crLU9WA0&t=2236s*/
import React, {useEffect,useState} from "react";
import io from 'socket.io-client';
import Navbar from "../Components/Navbar";

const Chat= ()=>{
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const socket = io('http://localhost:3000', { transports: ['websocket'], withCredentials: false });
  
    useEffect(() => {
      socket.on('chat message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
  
      return () => {
        socket.disconnect();
      };
    }, [socket]);
  
    const handleSendMessage = (e) => {
      e.preventDefault();
      socket.emit('chat message', messageInput);
      setMessageInput('');
    };
    return(
        <>
            <Navbar/>
            <div>
            <ul>
                {messages.map((message, index) => (
                <li key={index}>{message}</li>
                ))}
            </ul>
            <form onSubmit={handleSendMessage}>
                <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            </div>
        </>
    );
}

export default Chat;