import React from 'react'
import { Link } from 'react-router-dom'

const Row = () => {
  return (
    <div className='container'>
      <h1>Back</h1>
      <Link to='latpulldown'>
        <button>Lat Pull Down</button>
      </Link>
      <Link to='/row'>
        <button>Row</button>
      </Link>
      <h2>Row</h2>
    </div>
  )
}

export default Row
