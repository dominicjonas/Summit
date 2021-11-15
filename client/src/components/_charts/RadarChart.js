import React from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
  labels: ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core'],
  datasets: [
    {
      label: 'frequency',
      data: [20, 39, 33, 5, 12, 38],
      backgroundColor: 'rgba(81, 214, 203, 0.2)',
      borderColor: 'rgb(81, 214, 203)',
      borderWidth: 1
    }
  ]
}

const options = {
  scale: {
    ticks: { beginAtZero: true }
  }
}

const RadarChart = () => (
  <div className='chart'>
    <Radar data={data} options={options} height={300} />
  </div>
)

export default RadarChart
