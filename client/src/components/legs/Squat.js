import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BarChart from '../_charts/BarChart'
import LineChart from '../_charts/LineChart'
import PieChart from '../_charts/PieChart'

const Squat = () => {
  return (
    <div className='exercise-group-container'>
      <h1>Legs</h1>
      <div className='exercise-links'>
        <Link to='/squat'>
          <button>Squat</button>
        </Link>
        <Link to='/legpress'>
          <button>Leg Press</button>
        </Link>
      </div>
      <h2>Squat</h2>
      <div className='graph-container'>
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
      <form className='weight-input-container'>
        <input type='text' placeholder='Enter session weight' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Squat
