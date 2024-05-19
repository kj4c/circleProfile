import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let navigate = useNavigate();
  const routeChange = (newPath) => {
    navigate(path)
  }

  return (
    <>
      <div className="navBar">
        <button onClick = {() => routeChange('/')} className = "navButton">
          Home
        </button>
        <button className = "navButton">
          About Me
        </button>
        <button className = "navButton">
          Hobbies
        </button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
