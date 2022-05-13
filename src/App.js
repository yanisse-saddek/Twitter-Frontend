import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Tl from './components/Tl'
import {createContext, useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const UserContext = createContext()
function App() {
  const [isLogged, setLog] = useState(false)
  const setAuth=(state)=>{
    setLog(state)
    console.log(isLogged)
  }
  const sendToContext = {
    Log:isLogged,
    setAuth:setAuth
  }
  return (
    <UserContext.Provider value={sendToContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/tl" element={<Tl/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
