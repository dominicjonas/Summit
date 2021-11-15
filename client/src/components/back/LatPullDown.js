import React from 'react'
import { Link } from 'react-router-dom'
import BarChart from '../_charts/BarChart'
import LineChart from '../_charts/LineChart'
import PieChart from '../_charts/PieChart'

const LatPullDown = () => {
  return (
    <div className='exercise-group-container'>
      <h1>Back</h1>
      <div className='exercise-links'>
        <Link to='/latpulldown'>
          <button>Lat Pulldown</button>
        </Link>
        <Link to='/row'>
          <button>Row</button>
        </Link>
      </div>
      <h2>Lat Pull Down</h2>
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

export default LatPullDown
