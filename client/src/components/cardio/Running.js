import React from 'react'
import { Link } from 'react-router-dom'
import MultiLineChart from '../_charts/MultiLineChart'
import LineChart from '../_charts/LineChart'
import PolarChart from '../_charts/PolarChart'

import { motion } from 'framer-motion'

const Running = () => {
  return (
    <div className='exercise-group-container'>
      <h1>Cardio</h1>
      <div className='exercise-links'>
        <Link to='/running'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            // having bg color on hover change creates blur, due to GPU acceleration
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.0125 }}
          >
            Running
          </motion.button>
        </Link>
        <Link to='/swimming'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            // having bg color on hover change creates blur, due to GPU acceleration
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.0125 }}
          >
            Swimming
          </motion.button>
        </Link>
        <Link to='/cycling'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            // having bg color on hover change creates blur, due to GPU acceleration
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.0125 }}
          >
            Cycling
          </motion.button>
        </Link>
      </div>
      <h2>Running</h2>
      <div className='graph-container'>
        <LineChart />
        <PolarChart />
        <MultiLineChart />
      </div>
      <form className='weight-input-container'>
        <label>What was your personal best this session?</label>
        <input type='text' placeholder='Enter time' />
        <button>submit</button>
        <label>What is your goal for next session?</label>
        <input type='text' placeholder='Enter target' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Running
