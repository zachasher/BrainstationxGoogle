import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Zach from './Pages/Zach';
import Amr from './Pages/Amr';
import SimpleBottomNavigation from './Pages/Components/BottomNav';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Zach/>}/>
        <Route path="/amr" element={<Amr/>}/>
        <Route path="/nav" element={<SimpleBottomNavigation/>}/>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
