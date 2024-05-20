import { useState } from 'react'
import { Routes, Route} from "react-router-dom";

import {
  HomePage,
  AboutMe,
  Hobbies,
  Music,
  NavBar
} from './pages';

function App() {
  return (
    <>
      <div className="flex justify-between bg-primary text-white w-screen mb-10 h-20 items-center">
        <NavBar/>
      </div>
      <div>
        <Routes>
          <Route path = '/circleProfile' element = {<HomePage />}/>
          <Route path = '/circleProfile/aboutMe' element = {<AboutMe />}></Route>
          <Route path="/circleProfile/hobbies" element={<Hobbies />} /> 
          <Route path="/circleProfile/music" element={<Music />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
