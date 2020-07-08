import React, { useState, useEffect, useContext } from 'react'
import { apiURl } from '../api'

import { Context } from '../Context/AuthContext'

const Session = ({ history }) => {
  const [state, setState] = useState({
    isFetching: false,
    message: null,
    user: null,
  })

  const { isFetching, message, user = {} } = state

  const { handleLogout } = useContext(Context)

  const getUserInfo = async () => {
    setState({ ...state, isFetching: true, message: 'fetching details...' })
    try {
      const res = await fetch(`${apiURl}/session`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          Authorization: document.cookie,
        },
      }).then((res) => res.json())

      const { user } = res

      setState({ ...state, user, message: null, isFetching: false })
    } catch (e) {
      setState({ ...state, message: e.toString(), isFetching: false })
    }
  }

  useEffect(() => {
    if (history.location.state) {
      return setState({ ...state, user: { ...history.location.state } })
    }
    getUserInfo()
  }, [])

  return (
    <div className="wrapper">
      <h1>Welcome, {user && user.name}</h1>
      {user && user.email}
      <div className="message">
        {isFetching ? 'fetching details..' : message}
      </div>

      <button
        className="btn-mshield"
        style={{ height: '40px' }}
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  )
}

export default Session
