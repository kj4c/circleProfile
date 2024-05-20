import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  HomePage,
  AboutMe,
  Hobbies,
  Music,
  NavBar
} from './pages';

function App() {
  const navigate = useNavigate();
  const routeChange = (path) => {
    return () => navigate(path);
  }

  return (
    <>
      <div className="flex justify-between bg-primary text-white w-screen mb-10 h-20 items-center">
        <NavBar/>
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
