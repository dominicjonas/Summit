import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BenchPress = () => {
  return (
    <div className='container'>
      <h1>Chest</h1>
      <Link to='/becnhpress'>
        <button>Bench Press</button>
      </Link>
      <Link to='/cablefly'>
        <button>Cable Fly</button>
      </Link>
      <h2>Bench Press</h2>
    </div>
  )
}

export default BenchPress
