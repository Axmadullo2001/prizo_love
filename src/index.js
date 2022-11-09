import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import Routing from './Routing'

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
