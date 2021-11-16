import React from 'react'
import { Line } from 'react-chartjs-2'
import { makeRandomDataArray } from '../_data/randomData'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Me',
      data: makeRandomDataArray(6),
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1'
    },
    {
      label: 'Following',
      data: makeRandomDataArray(6),
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2'
    }
  ]
}

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1'
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false
        }
      }
    ]
  }
}

const MultiLineChart = () => (
  <div className='chart'>
    <Line data={data} options={options} height={300} />
  </div>
)

export default MultiLineChart
