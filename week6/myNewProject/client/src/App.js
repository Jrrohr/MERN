import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
const App = () => {
    
    return (
	<div>
    <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/home" default />
                <Route element={<Detail/>} path="/people/:id" />
            </Routes>
    </BrowserRouter>
        </div>
    ) 
}
export default App;