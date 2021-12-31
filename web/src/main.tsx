import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { OpenAPI } from './services/clients';

// Set the base URL for the OpenAPI clients.
OpenAPI.BASE = 'http://localhost:5159';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
