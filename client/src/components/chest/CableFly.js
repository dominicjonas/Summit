import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BarChart from '../_charts/BarChart'
import LineChart from '../_charts/LineChart'
import PieChart from '../_charts/PieChart'
import {
  addSessionWeight,
  getAllExerciseWeightInfo
} from '../../api/callerFunctions'

import { motion } from 'framer-motion'

const CableFly = () => {
  const userID = localStorage.getItem('id')
  const [weight, setWeight] = useState('')
  const [userInfo, setUserInfo] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      user: userID,
      exercise: 18,
      exercise_weight: weight,
      sets: 0,
      reps_per_set: 0
    }
    console.log(formData)
    addSessionWeight(formData)
  }

  useEffect(() => {
    getAllExerciseWeightInfo().then((data) => {
      setUserInfo(data)
    })
  }, [])

  // making array of exercise weights for this exercise
  const demoInfo = userInfo.filter((user) => user.user == userID)
  const filteredExercise = demoInfo.filter(
    (exercise) => exercise.exercise === 18
  )

  const dataArr = filteredExercise.map((data) => data.exercise_weight)

  console.log(demoInfo)

  return (
    <div className='exercise-group-container'>
      <h1>Chest</h1>
      <div className='exercise-links'>
        <Link to='/benchpress'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            // having bg color on hover change creates blur, due to GPU acceleration
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.0125 }}
          >
            Bench Press
          </motion.button>
        </Link>
        <Link to='/cablefly'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            // having bg color on hover change creates blur, due to GPU acceleration
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.0125 }}
          >
            Cable Fly
          </motion.button>
        </Link>
      </div>
      <h2>Cable Fly</h2>
      <div className='graph-container'>
        <LineChart data={dataArr} />
        <BarChart data={dataArr} />
        <PieChart />
      </div>
      <form className='weight-input-container' onSubmit={handleSubmit}>
        <label>What was your personal best this session?</label>
        <input
          type='text'
          placeholder='Enter session weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button>submit</button>
        <label>What is your goal for next session?</label>
        <input type='text' placeholder='Enter target' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default CableFly
