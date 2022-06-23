import './App.css';
import Navbar from './components/Navbar';
import InputNote from './components/InputNote';
import Cards from './components/cards/Cards';
import EditNote from './components/EditNote';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<InputNote/>} />
        <Route path="/notes/:id" element={<EditNote />} />
      </Routes>
      <Cards/>
    </div>
  );
}

export default App;
