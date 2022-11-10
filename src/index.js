import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import Routing from './App'

import './scss/main.scss'

const virtualDom = document.getElementById('root')

if (virtualDom !== null) {
  const root = ReactDOM.createRoot(virtualDom)
  root.render(
    <React.StrictMode>
      <Router>
        <Routing />
      </Router>
    </React.StrictMode>
  )
}
