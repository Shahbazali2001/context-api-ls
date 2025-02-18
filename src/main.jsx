import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CountPlus from './components/CountPlus.jsx'
import CountMinus from './components/CountMinus.jsx'
import ContextProvider from './contexts/ContextProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
      <CountPlus />
      <CountMinus />
    </ContextProvider>
  </StrictMode>,
)
