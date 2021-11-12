import React, { useState, useEffect } from 'react'
import {
  getAllExerciseWeightInfo,
  addSessionWeight
} from '../api/calllerFunctions'

const Dashboard = () => {
  const [ExerciseWeightInfo, setExerciseWeightInfo] = useState([])

  //   useEffect(() => {
  //     try {
  //       getAllExerciseWeightInfo().then((data) => {
  //         setUserInfo(data)
  //       })
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }, [])

  const handleWeightSubmit = (e) => {
    e.preventDefault()
    // addSessionWeight(sessionWeight)
    console.log('session submit fired. Weight added: ', ExerciseWeightInfo)
  }

  return (
    <div className='container'>
      <h1>Testing weight call</h1>
      <form onSubmit={handleWeightSubmit}>
        <label>Add weight: </label>
        <input
          type='number'
          placeholder='Enter number...'
          onChange={(e) => setExerciseWeightInfo(e.target.value)}
        />
        <button>Add Weight</button>
      </form>
      <h2>Weight Added on API: </h2>
      <p></p>
    </div>
  )
}

export default Dashboard
