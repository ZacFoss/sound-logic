import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Sound Logic</h1>
        <p>Reactive Web Application</p>
      </header>
      
      <main className="app-main">
        <section className="welcome-section">
          <h2>Welcome to Sound Logic Web</h2>
          <p>This is your reactive web application built with React and TypeScript.</p>
        </section>

        <section className="counter-section">
          <div className="counter">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
