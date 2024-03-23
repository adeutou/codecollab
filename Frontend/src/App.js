
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import {AppContext,socket} from './context/appContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import Login from './pages/LoginLogin'
//import Chat from './pages/Chat'
//import Signup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [rooms,setRooms] = useState([])
  const[currentRoom,setCurrentRoom] = useState([])
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState({});

  return (
    <AppContext.Provider value={{socket,currentRoom,setCurrentRoom,messages,setMessages,newMessages,setNewMessages,rooms,setRooms}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ca" element={<Carou />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/chat" element={<Chat />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
