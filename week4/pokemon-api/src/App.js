import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ pokemon, setPokemon ] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response => response.json())
    .then(response => setPokemon(response.results))
}, []);


  return (
    <div className="App">
      <h1>Let's see all the Pokemon!</h1>
      <div className="List">
      <ul>
        {
          pokemon.map((item) => (
            <li>{ item.name }</li>
          ))
        }
      </ul>
      </div>
    </div>
  );
}

export default App;
