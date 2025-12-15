import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. IMPORT BOOTSTRAP CSS (Add this line!)
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Import your styles
import './index.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)