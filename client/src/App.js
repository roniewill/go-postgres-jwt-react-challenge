import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Session from './components/Session'
import Customers from './components/Customers'
import './App.css'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/session" component={Session} />
      <Route path="/customers" component={Customers} />
    </Router>
  )
}

export default App
