import React from 'react'

const UserlogCard = ({ weight, sets, reps, date }) => {
  return (
    <div className='userlog-card'>
      <p>weight: {weight}</p>
      <p>sets: {sets}</p>
      <p>reps: {reps}</p>
      <p>date: {date}</p>
      <div>
        <button onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  )
}

export default UserlogCard
