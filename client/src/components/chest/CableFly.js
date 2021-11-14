import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CableFly = () => {
  return (
    <div className='container'>
      <h1>Chest</h1>
      <Link to='/benchpress'>
        <button>Bench Press</button>
      </Link>
      <Link to='/cablefly'>
        <button>Cable Fly</button>
      </Link>
      <h2>Cable Fly</h2>
    </div>
  )
}

export default CableFly
