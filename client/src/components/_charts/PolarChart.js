import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import { makeRandomDataArray } from '../_data/randomData'

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: makeRandomDataArray(6),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderWidth: 1
    }
  ]
}

const PolarChart = () => (
  <div className='chart'>
    <PolarArea data={data} height={300} />
  </div>
)

export default PolarChart
