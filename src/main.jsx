// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '/style.css'        // public/style.css 로 두었다면, 이 경로로 OK

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
