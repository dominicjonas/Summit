import React from 'react'
import { CgCloseR } from 'react-icons/cg'
import { AiOutlineEllipsis } from 'react-icons/ai'

const UserlogCard = ({ weight, sets, reps, date }) => {
  return (
    <div className='userlog-card'>
      <p className='date'>Session: {date}</p>
      <div className='userlog-card-weight-container'>
        <p>
          Session PB: <span className='card-pb'>{weight}kg</span>
        </p>
        <AiOutlineEllipsis className='dot' />
        <p>
          sets:<span className='card-set'>{sets}</span>
        </p>
        <AiOutlineEllipsis className='dot' />
        <p>
          reps: <span className='card-rep'>{reps}</span>
        </p>
      </div>
      <div className='remove-btn' onClick={() => removeTodo(index)}>
        <CgCloseR />
      </div>
    </div>
  )
}

export default UserlogCard
