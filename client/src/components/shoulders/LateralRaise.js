import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LateralRaise = () => {
  return (
    <div className='container'>
      <h1>Shoulders</h1>
      <Link to='/lateralraise'>
        <button>Lateral Raise</button>
      </Link>
      <Link to='/reversefly'>
        <button>Reverse Fly</button>
      </Link>
      <h2>Lateral Raise</h2>
    </div>
  )
}

export default LateralRaise