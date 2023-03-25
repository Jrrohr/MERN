import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Content from './components/Content';

function App() {

  const [ items, setItems ] = useState([
    {label: "Tab 1", content: "What does the fox say?"},
    {label: "Tab 2", content: "Ring-ding-ding-ding-dingeringeding"},
    {label: "Tab 3", content: "Wa-pa-pa-pa-pa-pa-pow!"}
  ]);
  const [ currentIndex, setCurrentIndex ] = useState(0);

  return (
    <div className="App">
      <Tabs items={ items } setItems={ setItems } setCurrentIndex={ setCurrentIndex } currentIndex={ currentIndex }/>
      <Content items={ items } setItems={ setItems } currentIndex={ currentIndex }/>
    </div>
  );
}

export default App;
