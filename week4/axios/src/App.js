import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ pokemon, setPokemon ] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response => {setPokemon(response.data.results)})
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