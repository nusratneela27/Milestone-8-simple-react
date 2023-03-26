import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'
import Knob from './components/Knob/knob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Knob steps="465"></Knob>
      <Device name="uphone" price="18000"></Device>
      <Device name="oppo" price="10000"></Device>
      <Watch></Watch>
      <h1>Vite + React </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
