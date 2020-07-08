import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { Context } from '../../Context/AuthContext'

const Navbar = () => {
  const { authenticated } = useContext(Context)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">MShield</a>
        {authenticated && (
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/session">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customers">
                  Clientes
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
