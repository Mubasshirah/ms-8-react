import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './assets/components/device/Device'
import Watch from './assets/components/watch/Watch'

function App() {
  const [count, setCount] = useState(0)
const devices=['samsung','apple','xiomi','nokia'];
  return (
    <div className="App">
      <Watch></Watch>
      {
        devices.map(device=><Device name={device}></Device>)
      }
      
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
    </div>
  )
}

export default App
