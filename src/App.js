import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Zach from './Pages/Zach';
import Amr from './Pages/Amr';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/zach" element={<Zach/>}/>
        <Route path="/amr" element={<Amr/>}/>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
