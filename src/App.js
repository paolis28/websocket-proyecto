import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio.jsx";
import Chat from "./Components/ChatRoom.jsx";
import Menu from "./Pages/Menu.jsx";
import Paquete from "./Pages/Paquetes.jsx";
import Home from "./Components/Home.jsx";
import ChatRoom from "./Components/ChatRoom.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Home" Component={Home} />
        <Route path="/room/:roomId" Component={ChatRoom} />
        <Route exact path="/Chat" element={<Chat />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Paquete" element={<Paquete />} />
      </Routes>
    </Router>
  );
}

export default App;
