import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName={ "John" }
      lastName={ "Doe" }
      age={ 26 }
      hairColor={ "Brown" } />
      <PersonCard
      firstName={ "Jimmy" }
      lastName={ "Dean" }
      age={ 64 }
      hairColor={ "Red" } />
      <PersonCard
      firstName={ "Elvis" }
      lastName={ "Presley" }
      age={ 32 }
      hairColor={ "Black" } />
      <PersonCard
      firstName={ "Hillbilly" }
      lastName={ "Bob" }
      age={ 21 }
      hairColor={ "Blonde" } />
    </div>
  );
}

export default App;
