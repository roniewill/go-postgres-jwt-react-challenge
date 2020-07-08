import React, { useState, useContext, useEffect } from 'react'

import { Context } from '../Context/AuthContext'

const Login = ({ history }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const { authenticated, handleLogin, message, isSubmitting } = useContext(
    Context
  )

  useEffect(() => {
    if (authenticated) history.push('/session')
  }, [authenticated])

  const { email, password } = state

  const isEmpty = !email || !password

  const handleChange = async (e) => {
    const { name, value } = e.target
    await setState({ ...state, [name]: value })
  }

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <input
        className="input"
        type="text"
        placeholder="email"
        value={email}
        name="email"
        onChange={(e) => {
          handleChange(e)
        }}
      />

      <input
        className="input"
        type="password"
        placeholder="password"
        value={password}
        name="password"
        onChange={(e) => {
          handleChange(e)
        }}
      />

      <button
        className={isEmpty ? 'btn-mshield disabled' : 'btn-mshield'}
        disabled={isSubmitting || isEmpty}
        onClick={() => handleLogin(email, password)}
      >
        {isSubmitting ? '.....' : 'login'}
      </button>
      {message && <div className="message">{message}</div>}
    </div>
  )
}

export default Login
