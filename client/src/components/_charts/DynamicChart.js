import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const rand = () => Math.round(Math.random() * 100)
// having a minus number as the second random input will create the up down effect on the dynamic chart
// const rand = () => Math.round(Math.random() * 30 - 20)

const genData = () => ({
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Scale',
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
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
})

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

const DynamicChart = () => {
  const [data, setData] = useState(genData())

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='chart'>
      <Bar data={data} options={options} width={300} height={300} />
    </div>
  )
}

export default DynamicChart
