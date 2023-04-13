import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
const App = () => {
    
    return (
	<div>
    <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/home" default />
            </Routes>
    </BrowserRouter>
        </div>
    ) 
}
export default App;