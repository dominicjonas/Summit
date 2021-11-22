import React from 'react'
import { CgCloseR } from 'react-icons/cg'
import { AiOutlineEllipsis } from 'react-icons/ai'

const UserlogCard = ({ weight, sets, reps, date }) => {
  console.log(date)
  const formattedDate = date.split('').splice(0, 10).join('')
  const formattedTime = date.split('').splice(11, 8).join('')

  // console.log(formattedDate)
  console.log(formattedDate + formattedTime)

  return (
    <div className='userlog-card'>
      <p className='date'>
        Session: <span className='card-date'>{formattedDate}</span>{' '}
        <span className='card-time'>{formattedTime}</span>
      </p>
      <div className='userlog-card-weight-container'>
        <p>
          SESSION PB: <span className='card-pb'>{weight}kg</span>
        </p>
        <AiOutlineEllipsis className='dot' />
        <p>
          SETS:<span className='card-set'>{sets}</span>
        </p>
        <AiOutlineEllipsis className='dot' />
        <p>
          REPS: <span className='card-rep'>{reps}</span>
        </p>
      </div>
      <div className='remove-btn' onClick={() => removeTodo(index)}>
        <CgCloseR />
      </div>
    </div>
  )
}

export default UserlogCard
