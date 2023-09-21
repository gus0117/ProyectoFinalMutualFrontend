import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { ComercioProvider } from './context/ComercioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ComercioProvider>
          <App />
        </ComercioProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
