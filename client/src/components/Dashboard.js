import React, { useState, useEffect } from 'react'
import {
  getAllExerciseWeightInfo,
  addSessionWeight
} from '../api/callerFunctions'

import BarChart from './_charts/BarChart'
import LineChart from './_charts/LineChart'
import PieChart from './_charts/PieChart'
import RadarChart from './_charts/RadarChart'
import PolarChart from './_charts/PolarChart'
import MultiLineChart from './_charts/MultiLineChart'
import DynamicChart from './_charts/DynamicChart'
import ScatterChart from './_charts/ScatterChart'

import { motion } from 'framer-motion'

const Dashboard = () => {
  // const [weight, setWeight] = useState(0)
  // const [exerciseInfo, setExerciseInfo] = useState([])

  // useEffect(() => {
  //   try {
  //     getAllExerciseWeightInfo().then((data) => {
  //       setExerciseInfo(data)
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  // console.log(exerciseInfo)

  // const handleWeightSubmit = (e) => {
  //   e.preventDefault()
  //   addSessionWeight({
  //     exercise_name: 'bench press',
  //     exercise_weight: weight
  //   })
  //   console.log('session submit fired. Weight added: ', weight)
  // }

  return (
    <motion.div
      className='exercise-group-container'
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 2 }}
    >
      <h1>My Dashboard</h1>
      {/* <form onSubmit={handleWeightSubmit}>
        <label>Add weight: </label>
        <input
          type='number'
          placeholder='Enter number...'
          onChange={(e) => setWeight(e.target.value)}
        />
        <button>Add Weight</button>
      </form>
      <h2>Weight Added on API: </h2>
  */}
      <div className='graph-container'>
        <LineChart data={[30, 45, 55, 50, 60, 65, 70, 80]} />
        <BarChart data={[30, 45, 55, 50, 60, 65, 70, 80]} />
        <PieChart />
        <RadarChart />
        <PolarChart />
        <MultiLineChart />
        <DynamicChart />
        <ScatterChart />
      </div>
    </motion.div>
  )
}

export default Dashboard
