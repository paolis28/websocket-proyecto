/*https://www.youtube.com/watch?v=Yi2crLU9WA0&t=2236s*/
import React, {useEffect,useState} from "react";
import io from 'socket.io-client';
import Navbar from "../Components/Navbar";
import '../styles/Chat.css'

const Chat= ()=>{
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const socket = io('http://localhost:3000', { transports: ['websocket'], withCredentials: false });
  
    useEffect(() => {
        socket.on('chat message', (message) => {
            console.log('Mensaje recibido:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    
        return () => {
            socket.off();
        };
    }, []);
  
    const handleSendMessage = (e) => {
      e.preventDefault();
      socket.emit('chat message', messageInput);
      setMessageInput('');
    };
    return(
        <>
            <Navbar/>
            <div className="containerGlobalChat">
                <div className="ul-mensajes">
                    <ul>
                        {messages.map((message, index) => (
                        <li  className="li-mensajes" key={index}>{message}</li>
                        ))}
                    </ul>
                </div>
                <form onSubmit={handleSendMessage} className="formMensajes">
                    <input
                        type="text"
                        placeholder="Escribe un mensaje..."
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