import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { Score } from './components/Score.jsx'
import { Card } from './components/Card.jsx'
import './styles/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Score />
    <div className="cards">
        <Card />
    </div>
  </StrictMode>,
)
