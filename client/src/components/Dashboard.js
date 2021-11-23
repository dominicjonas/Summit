import React from 'react'
import BarChart from './_charts/BarChart'
import LineChart from './_charts/LineChart'
import PieChart from './_charts/PieChart'
import RadarChart from './_charts/RadarChart'
import PolarChart from './_charts/PolarChart'
import MultiLineChart from './_charts/MultiLineChart'
import DynamicChart from './_charts/DynamicChart'
import ScatterChart from './_charts/ScatterChart'

import { motion } from 'framer-motion'

const graphContainerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 }
  }
}

const Dashboard = () => {
  return (
    <motion.div className='exercise-group-container'>
      <h1>My Dashboard</h1>
      <motion.div
        className='graph-container'
        variants={graphContainerVariants}
        initial='hidden'
        animate='visible'
      >
        <LineChart data={[30, 45, 55, 50, 60, 65, 70, 80]} />
        <BarChart data={[30, 45, 55, 50, 60, 65, 70, 80]} />
        <PieChart />
        <RadarChart />
        <PolarChart />
        <MultiLineChart />
        <DynamicChart />
        <ScatterChart />
      </motion.div>
    </motion.div>
  )
}

export default Dashboard
