import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CountPlus from './components/CountPlus.jsx'
import CountMinus from './components/CountMinus.jsx'
import { CounterProvider } from './contexts/counterContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <App />
      <CountPlus />
      <CountMinus />
    </CounterProvider>
  </StrictMode>,
)
