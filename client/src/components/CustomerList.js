import React from 'react'

import { FaEye, FaEdit } from 'react-icons/fa'

import Loading from '../components/Common/Loading'

const CustomerList = ({ customers, loading }) => {
  if (loading) {
    return <Loading />
  }

  return (
    <table className="table table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">Telefone</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.customerID}>
            <th>{customer.name}</th>
            <td>{customer.email}</td>
            <td>{customer.telephone}</td>
            <td>
              <button
                type="button"
                className="btn btn-info btn-sm mr-1"
                title="Detalhes"
              >
                <FaEye />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                title="Editar"
              >
                <FaEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerList
