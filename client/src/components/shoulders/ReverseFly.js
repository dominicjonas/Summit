import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ReverseFly = () => {
  return (
    <div className='container'>
      <h1>Shoulders</h1>
      <Link to='/lateralraise'>
        <button>Lateral Raise</button>
      </Link>
      <Link to='/reversefly'>
        <button>Reverse Fly</button>
      </Link>
      <h2>Reverse Fly</h2>
    </div>
  )
}

export default ReverseFly
