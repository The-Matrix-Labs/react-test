import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppKitProvider } from './appkit-setup.jsx'

// Import the AppKitProvider and required dependencies


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </StrictMode>,
)
