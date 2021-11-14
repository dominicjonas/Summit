import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Squat = () => {
  return (
    <div className='container'>
      <h1>Legs</h1>
      <Link to='/squat'>
        <button>Front Squat</button>
      </Link>
      <Link to='/legpress'>
        <button>Leg Press</button>
      </Link>
      <h2>Squat</h2>
    </div>
  )
}

export default Squat
