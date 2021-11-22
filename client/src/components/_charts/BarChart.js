import React from 'react'
import { Bar } from 'react-chartjs-2'
// import { makeRandomDataArray } from '../_data/randomData';

const buildBarChartData = (dataArr) => {
  const data = {
    labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
    datasets: [
      {
        label: 'weight',
        data: dataArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  return data
}

const options = {
  responsive: true,
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

const BarChart = ({ data }) => (
  <div className='chart'>
    <Bar data={buildBarChartData(data)} options={options} height={300} />
  </div>
)

export default BarChart
