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
import UserlogCard from '../logs/UserlogCard'

const graphContainerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 }
  }
}

const BicepCurl = () => {
  const userID = localStorage.getItem('id')
  const [goal, setGoal] = useState('')
  const [weight, setWeight] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [userInfo, setUserInfo] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      user: userID,
      exercise: 23,
      exercise_weight: weight,
      sets: sets,
      reps_per_set: weight
    }
    addSessionWeight(formData)
    setWeight('')
    setSets('')
    setReps('')
    setGoal('')
  }

  useEffect(() => {
    getAllExerciseWeightInfo().then((data) => {
      setUserInfo(data)
    })
  }, [])

  const demoInfo = userInfo.filter((user) => user.user == userID)
  const filteredExercise = demoInfo.filter(
    (exercise) => exercise.exercise === 23
  )
  const dataArr = filteredExercise.map((data) => data.exercise_weight)

  const reversedLogs = filteredExercise.slice(0).reverse()

  const last8logs = filteredExercise
    .slice(-8)
    .map((data) => data.exercise_weight)

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
      <h2>Bicep Curl</h2>
      <motion.div
        className='graph-container'
        variants={graphContainerVariants}
        initial='hidden'
        animate='visible'
      >
        <LineChart data={last8logs} />
        <BarChart data={last8logs} />
        <PieChart />
      </motion.div>
      <form className='weight-input-container' onSubmit={handleSubmit}>
        <label>What is your goal for next session?</label>
        <input
          type='text'
          placeholder='Enter weight goal'
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <label>What is your heaviest weight this session?</label>
        <input
          type='text'
          placeholder='Enter weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label>Number of sets at heaviest weight?</label>
        <input
          type='text'
          placeholder='Enter sets'
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />

        <label>Number of reps at heaviest weight?</label>
        <input
          type='text'
          placeholder='Enter reps'
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button className='exercise-form-button'>SUBMIT</button>
      </form>
      <div className='userlogs-container'>
        <h2 className='userlogs-header'>Session Logs</h2>
        {reversedLogs.map((userlog) => (
          <UserlogCard
            key={userlog.id}
            weight={userlog.exercise_weight}
            sets={userlog.sets}
            reps={userlog.reps_per_set}
            date={userlog.date_completed}
          />
        ))}
      </div>
    </div>
  )
}

export default BicepCurl
