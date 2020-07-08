import React, { useState } from 'react'

import { apiURl } from '../api'

const AddCostumer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    telephone: '',
    street1: '',
    country: '',
    latitude: '',
    longitude: '',
  })

  const [state, setState] = useState({
    message: '',
    errors: '',
    isSubmitting: false,
  })

  const { name, email, telephone, street1, country, latitude, longitude } = form

  const { message, errors, isSubmitting } = state

  const handleSave = async (e) => {
    e.preventDefault()

    setState({ ...state, isSubmitting: true })

    let body = {
      name,
      email,
      telephone,
      location: {
        street1,
        country,
        latitude: +latitude,
        longitude: +longitude,
      },
    }

    try {
      const res = await fetch(`${apiURl}/customers`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
      const { success, msg, errors } = res

      if (!success) {
        return setState({ ...state, message: msg, errors, isSubmitting: false })
      }
    } catch (e) {
      setState({ ...state, message: e.toString(), isSubmitting: false })
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <div className="m-2">
        <h3>Novo Cliente</h3>
      </div>
      <form className="mt-4">
        <div className="form-row m-2">
          <div className="col">
            <input
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="form-control"
              placeholder="Nome"
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="telephone"
              value={telephone}
              onChange={handleChange}
              className="form-control"
              placeholder="Telefone"
            />
          </div>
        </div>

        <div className="form-row m-2">
          <div className="col">
            <input
              type="text"
              name="street1"
              value={street1}
              onChange={handleChange}
              className="form-control"
              placeholder="Endereço"
            />
          </div>
        </div>

        <div className="form-row m-2">
          <div className="col">
            <input
              type="text"
              name="country"
              value={country}
              onChange={handleChange}
              className="form-control"
              placeholder="País"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="latitude"
              value={latitude}
              onChange={handleChange}
              className="form-control"
              placeholder="Latitude"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="longitude"
              value={longitude}
              onChange={handleChange}
              className="form-control"
              placeholder="Longitude"
            />
          </div>
        </div>
        <div className="form-row m-2">
          <div className="col">
            <button
              onClick={handleSave}
              type="submit"
              className="btn btn-primary"
            >
              {isSubmitting ? 'Aguarde...' : 'Salvar'}
            </button>
          </div>
          {message && (
            <div className="message">{message && <p>&bull; {message}</p>}</div>
          )}
          <div>
            {errors &&
              errors.map((error, id) => {
                return <p key={id}> &bull; {error}</p>
              })}
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCostumer
