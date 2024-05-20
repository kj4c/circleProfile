import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  HomePage,
  AboutMe,
  Hobbies,
  Music
} from './pages';

function App() {
  const navigate = useNavigate();
  const routeChange = (path) => {
    return () => navigate(path);
  }

  const knownPaths = [
    '/aboutMe',
    '/hobbies',
    '/music'
  ];

  return (
    <>
      <div className="navBar">
        <button onClick={routeChange('/')} className = "text-green-500">
          Home
        </button>
        <p className='text-red-500'>HELLO</p>
        <button onClick={routeChange('/aboutMe')} className = "navButton">
          About Me
        </button>
        <button onClick={routeChange('/hobbies')} className = "navButton">
          Hobbies
        </button>
        <button onClick={routeChange('/music')} className = "navButton">
          My Music
        </button>
      </div>
      <div>
        <Routes>
          <Route path = '/' element = {<HomePage />}/>
          <Route path = '/aboutMe' element = {<AboutMe />}></Route>
          <Route path="/hobbies" element={<Hobbies />} /> 
          <Route path="/music" element={<Music />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
