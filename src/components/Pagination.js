import React from 'react'
import './Pagination.css'

function Pagination({ postsPerPage, totalPosts, paginate }) {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);

  }
  // const paginate1 = (number) => {
  //   alert("i am in pagination")
  // }

  return (
    <nav>
      <ul className='pagination'>

        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
