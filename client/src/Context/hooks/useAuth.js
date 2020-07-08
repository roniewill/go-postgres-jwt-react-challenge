import React, { useState, useEffect } from 'react'

import { apiURl } from '../../api'
import { createCookie, deleteCookie } from '../../utils'

const useAuth = () => {
  const [state, setState] = useState({
    authenticated: false,
    message: '',
    isSubmitting: false,
  })

  const { authenticated, message, isSubmitting } = state

  useEffect(() => {
    if (document.cookie) setState({ ...state, authenticated: true })
  }, [])

  async function handleLogin(email, password) {
    setState({ ...state, isSubmitting: true })
    const res = await fetch(`${apiURl}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())

    const { token, success, msg } = res

    if (!success) setState({ ...state, message: msg })

    if (token) createCookie('token', token, 1.0)

    setState({ ...state, authenticated: true, isSubmitting: false })
  }

  function handleLogout() {
    deleteCookie('token')
    setState({ ...state, authenticated: false })
  }

  return { handleLogin, handleLogout, authenticated, message, isSubmitting }
}

export default useAuth
