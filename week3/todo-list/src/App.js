import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [ tasks, setTasks ] = useState([]);

  return (
    <div className="App">
      <Form tasks={ tasks } setTasks={ setTasks }/>
      <Display tasks={ tasks } setTasks={ setTasks }/>
    </div>
  );
}

export default App;
