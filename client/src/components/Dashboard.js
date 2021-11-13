import React, { useState, useEffect } from 'react'
import {
  getAllExerciseWeightInfo,
  addSessionWeight
} from '../api/callerFunctions'

const Dashboard = () => {
  const [weight, setWeight] = useState(0)
  const [exerciseInfo, setExerciseInfo] = useState([])

  useEffect(() => {
    try {
      getAllExerciseWeightInfo().then((data) => {
        setExerciseInfo(data)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  console.log(exerciseInfo)

  const handleWeightSubmit = (e) => {
    e.preventDefault()
    addSessionWeight({
      exercise_name: 'bench press',
      exercise_weight: weight
    })
    console.log('session submit fired. Weight added: ', weight)
  }

  return (
    <div className='container'>
      <h1>Dashboard</h1>
      <form onSubmit={handleWeightSubmit}>
        <label>Add weight: </label>
        <input
          type='number'
          placeholder='Enter number...'
          onChange={(e) => setWeight(e.target.value)}
        />
        <button>Add Weight</button>
      </form>
      <h2>Weight Added on API: </h2>
      <p></p>
    </div>
  )
}

export default Dashboard
