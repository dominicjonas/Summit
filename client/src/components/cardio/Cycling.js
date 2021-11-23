import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PolarChart from '../_charts/PolarChart'
import LineChart from '../_charts/LineChart'
import MultiLineChart from '../_charts/MultiLineChart'

import { motion } from 'framer-motion'

const Cycling = () => {
  const userID = localStorage.getItem('id')
  const [goal, setGoal] = useState('')
  const [time, setTime] = useState('')
  const [distance, setDistance] = useState('')
  const [userInfo, setUserInfo] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const graphContainerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    }
  }

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
      <h2>Cycling</h2>
      <motion.div
        className='graph-container'
        variants={graphContainerVariants}
        initial='hidden'
        animate='visible'
      >
        <LineChart />
        <PolarChart />
        <MultiLineChart />
      </motion.div>
      <form className='weight-input-container' onSubmit={handleSubmit}>
        <label>What is your goal for next session?</label>
        <input
          type='text'
          placeholder='Enter goal'
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <label>What was your best time this session?</label>
        <input
          type='text'
          placeholder='Enter time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label>How far did you go?</label>
        <input
          type='text'
          placeholder='Enter distance'
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button className='exercise-form-button'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Cycling
