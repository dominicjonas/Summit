import React from 'react'
import { Scatter } from 'react-chartjs-2'

const rand = () => Math.round(Math.random() * 20 - 10)

const data = {
  datasets: [
    {
      label: 'A dataset',
      data: [
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() }
      ],
      backgroundColor: 'rgb(81, 214, 203)'
    }
  ]
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

const ScatterChart = () => (
  <div className='chart'>
    <Scatter data={data} options={options} width={300} height={300} />
  </div>
)

export default ScatterChart
