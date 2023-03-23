import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Boxes from './components/Boxes';

function App() {
  const [ colors, setColors ] = useState([]);
  return (
    <div className="App">
      <Form colors={ colors } setColors={ setColors }/>
      <Boxes colors={ colors }/>
    </div>
  );
}

export default App;
