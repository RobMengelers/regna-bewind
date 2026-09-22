import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="page">
      <p className="eyebrow">Regna Bewind</p>
      <h1>Your new React app is ready.</h1>
      <p className="intro">Start building your personal project here.</p>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
