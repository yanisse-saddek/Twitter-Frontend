import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Tl from './components/Tl'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/tl" element={<Tl/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
