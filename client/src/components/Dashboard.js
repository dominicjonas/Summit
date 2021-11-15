import React, { useState, useEffect } from 'react'
import { Radar } from 'react-chartjs-2'
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
    <div className='exercise-group-container'>
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
        <LineChart />
        <BarChart />
        <PieChart />
        <RadarChart />
        <PolarChart />
        <MultiLineChart />
        <DynamicChart />
        <ScatterChart />
      </div>
    </div>
  )
}

export default Dashboard
