import React from 'react'
import './App.css'

import Root from './Routes/Root'

import { AuthProvider } from './Context/AuthContext'

const App = () => (
  <AuthProvider>
    <Root />
  </AuthProvider>
)

export default App
