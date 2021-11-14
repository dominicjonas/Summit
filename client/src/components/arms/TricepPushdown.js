import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TricepPushdown = () => {
  return (
    <div className='container'>
      <h1>Arms</h1>
      <Link to='/bicepcurl'>
        <button>Bicep Curl</button>
      </Link>
      <Link to='/triceppushdown'>
        <button>Tricep Pushdown</button>
      </Link>
      <h2>Tricep Pushdown</h2>
    </div>
  )
}

export default TricepPushdown
