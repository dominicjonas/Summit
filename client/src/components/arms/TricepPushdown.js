import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BarChart from '../_charts/BarChart'
import LineChart from '../_charts/LineChart'
import PieChart from '../_charts/PieChart'

import { motion } from 'framer-motion'

const TricepPushdown = () => {
  return (
    <div className='exercise-group-container'>
      <h1>Arms</h1>
      <div className='exercise-links'>
        <Link to='/bicepcurl'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            // having bg color on hover change creates blur, due to GPU acceleration
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.0125 }}
          >
            Bicep Curl
          </motion.button>
        </Link>
        <Link to='/triceppushdown'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            // having bg color on hover change creates blur, due to GPU acceleration
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.0125 }}
          >
            Tricep Pushdown
          </motion.button>
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
