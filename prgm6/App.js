import React from 'react';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import './App.css';

function Home(){
  return <h2>Home Page</h2>
}
function About(){
  return <h2>About us</h2>
}
function Contact(){
  return <h2>Contact us</h2>
}
function Detail(){
  return <h2>Details</h2>
}

export default function App(){
  return(
  <BrowserRouter>
    <nav>
      <NavLink to="/"end>Home</NavLink>|{""}
      <NavLink to="/about">About</NavLink>|{""}
      <NavLink to="/contact">Contact</NavLink>|{""}
      <NavLink to="/detail">Detail</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/detail" element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
  );
}