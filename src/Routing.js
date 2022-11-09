import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Store } from './pages/Store'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
    </Routes>
  )
}

export default Routing
