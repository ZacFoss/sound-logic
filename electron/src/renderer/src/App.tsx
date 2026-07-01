import React, { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [pingResult, setPingResult] = useState<string>('')

  const handlePing = async (): Promise<void> => {
    const result = await window.api.ping()
    setPingResult(result)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-container">
          <div className="logo" aria-label="CareConnect logo" />
          <h1 className="app-title">CareConnect</h1>
        </div>
        <p className="app-subtitle">Desktop Application</p>
      </header>

      <main className="app-main">
        <section className="welcome-card">
          <h2>Welcome to CareConnect</h2>
          <p>
            Your desktop companion for seamless care coordination. Sign in to access your dashboard,
            patient records, and messaging.
          </p>
          <div className="action-row">
            <button className="btn btn-primary">Sign In</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </section>

        <section className="status-card">
          <h3>Connection Status</h3>
          <div className="status-indicator">
            <span className="status-dot status-dot--online" aria-hidden="true" />
            <span>Desktop bridge active</span>
          </div>
          <button className="btn btn-ghost" onClick={handlePing}>
            Ping main process
          </button>
          {pingResult && (
            <p className="ping-result" role="status">
              Response: <strong>{pingResult}</strong>
            </p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
