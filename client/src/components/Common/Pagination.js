import React from 'react'

const Pagination = ({ perPage, total, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? `page-item active` : `page-item`
            }
            aria-current="page"
          >
            <span onClick={() => paginate(number)} className="page-link">
              {number}
              <span className="sr-only">(current)</span>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
