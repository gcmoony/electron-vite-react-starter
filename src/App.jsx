import { useState } from "react"
import GCMoony from "./assets/GCMoony.png"

export default function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount((prev) => prev + 1)
  }

  const subtractCount = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <>
      <h2>Electron Forge with Vite and React</h2>
      <img
        id='gcmoony'
        src={GCMoony}
        alt='GCMoony'
      />
      <div className='btn-container'>
        <button onClick={subtractCount}>➖</button>
        <span>Count: {count}</span>
        <button onClick={addCount}>➕</button>
      </div>

      <p>
        Get started by editing <code>App.jsx</code>
      </p>
    </>
  )
}
