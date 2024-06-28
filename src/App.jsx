import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import First from './pages/First';
import Second from './pages/Second';
import Home from './pages/Home';
import  { TodoProvider } from './contexts/TodoContext';

function App() {
  
    

  return (
   
      
    <Router>
    <Navbar />
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<First />} />
        <Route path="/done" element={<Second />} />
      </Routes>
      </TodoProvider>
    </Router>
 
  );
}

export default App;
