import React from 'react'
import Select from 'react-select'

const Dropdown = ({ ex1, ex2 }) => {
  const options = [
    { value: 'bench press', label: ex1 },
    { value: 'cable fly', label: ex2 }
  ]

  return (
    <div className='dropdown-container'>
      <Select options={options} />
    </div>
  )
}

export default Dropdown
