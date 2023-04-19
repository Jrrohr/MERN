import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Update from './components/Update';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<Form />} path="/new" />
          <Route element={<Update />} path="/authors/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
