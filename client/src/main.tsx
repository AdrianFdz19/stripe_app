
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import AppProvider from './context/AppProvider'

createRoot(document.getElementById('root')!).render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
)
