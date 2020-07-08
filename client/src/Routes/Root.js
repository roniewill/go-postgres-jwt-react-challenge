import React, { useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Register from '../pages/Register'
import Login from '../pages/Login'
import Session from '../pages/Session'
import Customers from '../pages/Customers'
import AddCustomer from '../pages/AddCustomer'

import Navbar from '../components/Common/Navbar'
import { Context } from '../Context/AuthContext'

const CustomRoute = ({ component, ...rest }) => {
  const { authenticated } = useContext(Context)
  const isAllow = authenticated && document.cookie
  const finalComponent = isAllow ? component : Login

  return <Route {...rest} component={finalComponent} />
}

const Root = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <CustomRoute path="/session" component={Session} />
    <CustomRoute path="/customers" component={Customers} />
    <CustomRoute path="/new-customer" component={AddCustomer} />
  </Router>
)

export default Root
