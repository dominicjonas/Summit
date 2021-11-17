import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BarChart from '../_charts/BarChart'
import LineChart from '../_charts/LineChart'
import PieChart from '../_charts/PieChart'

const TricepPushdown = () => {
  return (
    <div className='exercise-group-container'>
      <h1>Arms</h1>
      <div className='exercise-links'>
        <Link to='/bicepcurl'>
          <button>Bicep Curl</button>
        </Link>
        <Link to='/triceppushdown'>
          <button>Tricep Pushdown</button>
        </Link>
      </div>
      <h2>Tricep Pushdown</h2>
      <div className='graph-container'>
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
      <form className='weight-input-container'>
        <label>What was your personal best this session?</label>
        <input type='text' placeholder='Enter session weight' />
        <button>submit</button>
        <label>What is your lifting goal for next session?</label>
        <input type='text' placeholder='Enter weight target' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default TricepPushdown
