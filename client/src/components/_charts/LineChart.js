import React from 'react'
import { Line } from 'react-chartjs-2'
import { makeRandomDataArray } from '../_data/randomData'

const data = {
  labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  datasets: [
    {
      label: 'session',
      data: makeRandomDataArray(8),
      fill: false,
      backgroundColor: 'rgb(81, 214, 203)',
      borderColor: 'rgb(24, 247, 228,)'
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

const LineChart = () => (
  <div className='chart'>
    <Line data={data} options={options} height={300} />
  </div>
)

export default LineChart
