import React from 'react'
import { Scatter } from 'react-chartjs-2'

const rand = () => Math.round(Math.random() * 50)

const data = {
  datasets: [
    {
      label: 'dataset',
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
    yAxis: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `${value}kg`
        }
      },
      grid: {
        lineWidth: 1
      }
    }
  }
}

const ScatterChart = () => (
  <div className='chart'>
    <Scatter data={data} options={options} width={300} height={300} />
  </div>
)

export default ScatterChart
