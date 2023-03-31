import React from 'react';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
