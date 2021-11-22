import React from 'react'
import { CgCloseR } from 'react-icons/cg'
import { AiOutlineEllipsis } from 'react-icons/ai'

const UserlogCard = ({ weight, sets, reps, date }) => {
  return (
    <div className='userlog-card'>
      <p className='date'>Session: {date}</p>
      <div className='userlog-card-weight-container'>
        <p>Session Personal Best: {weight}kg</p>
        <AiOutlineEllipsis className='dot' />
        <p>sets: {sets}</p>
        <AiOutlineEllipsis className='dot' />
        <p>reps: {reps}</p>
      </div>
      <div className='remove-btn' onClick={() => removeTodo(index)}>
        <CgCloseR />
      </div>
    </div>
  )
}

export default UserlogCard
