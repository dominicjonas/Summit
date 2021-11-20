import React from 'react'
import { Line } from 'react-chartjs-2'
// import { makeRandomDataArray } from '../_data/randomData'

const buildData = (dataArr) => {
  const data = {
    labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
    datasets: [
      {
        label: 'session',
        data: dataArr,
        fill: false,
        backgroundColor: 'rgb(81, 214, 203)',
        borderColor: 'rgb(24, 247, 228,)'
      }
    ]
  }
  console.log(data)
  return data
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

const LineChart = ({ data }) => (
  <div className='chart'>
    <Line data={buildData(data)} options={options} height={300} />
  </div>
)

export default LineChart
