import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Changeable from './components/Changeable';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/:parameter" element={<Changeable />} />
        <Route exact path="/:parameter/:color1/:color2" element={<Changeable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
