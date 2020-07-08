import React, { useState, useEffect } from 'react'

import { FaUserPlus } from 'react-icons/fa'

import _ from 'lodash'

import { apiURl } from '../api'

import CustomerList from '../components/CustomerList'
import Pagination from '../components/Common/Pagination'

const Customers = ({ history }) => {
  const [state, setState] = useState({
    customers: [],
    message: null,
    loading: false,
    currentPage: 1,
    perPage: 5,
  })

  const { customers, message, loading, currentPage, perPage } = state

  useEffect(() => {
    const getCustomers = async () => {
      setState({ ...state, loading: true })
      try {
        const res = await fetch(`${apiURl}/customers`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            Authorization: document.cookie,
          },
        }).then((res) => res.json())

        const { customers } = res

        setState({
          ...state,
          customers: _.orderBy(customers, ['customerID'], ['desc']),
          loading: false,
        })
      } catch (e) {
        setState({ ...state, message: e.toString() })
      }
    }
    getCustomers()
  }, [])

  const goTo = (route) => {
    history.push(route)
  }

  // get current customers
  const indexLast = currentPage * perPage
  const indexFirst = indexLast - perPage
  const currentCustomers = customers.slice(indexFirst, indexLast)

  // change page
  const paginate = (number) => setState({ ...state, currentPage: number })

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary btn-sm float-right m-2"
        title="Add novo cliente"
        onClick={() => goTo('/new-customer')}
      >
        <FaUserPlus />
      </button>
      <CustomerList customers={currentCustomers} loading={loading} />
      <Pagination
        perPage={perPage}
        total={customers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Customers
