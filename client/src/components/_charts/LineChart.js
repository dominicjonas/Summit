import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  datasets: [
    {
      label: 'session',
      data: [50, 55, 60, 50, 70, 75, 85, 100],
      fill: false,
      backgroundColor: 'rgb(81, 214, 203)',
      borderColor: 'rgb(24, 247, 228,)'
    }
  ]
}

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

const LineChart = () => (
  <div className='chart'>
    <Line data={data} options={options} height={300} />
  </div>
)

export default LineChart
