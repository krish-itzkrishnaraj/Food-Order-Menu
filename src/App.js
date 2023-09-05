import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Pages/Create';
import Read from './Pages/Read';
import Update from './Pages/Update';
import Header from './Pages/Header';
function App() {
  return (
    <div>
        <Router>
           <Header/>
            <Routes>
                <Route exact path='/' element={<Create/>}></Route>
                <Route path='/read' element={<Read/>}></Route>
                <Route path='/update' element={<Update/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App