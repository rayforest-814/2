import { useState, useEffect } from 'react'
import Dev from './Dev.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Main App component
function App() {
  // State for count
  const [count, setCount] = useState(0)
  // State for text
  const [textState, setTextState] = useState("qwe")

  // Handler for code click (currently empty)
  function handleSubmit(e) {

  }

  return (
    <>
      <div>
        {/* Vite logo link */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* React logo link */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Dev number={count}/>
      <div className="card">
        {/* Button to increment count */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} and {textState} is string. 
        </button>
        <p>
          {/* Clickable code element */}
          Edit <code onClick={handleSubmit}>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
