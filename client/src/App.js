import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

// * chest
import BenchPress from './components/chest/BenchPress'
import CableFly from './components/chest/CableFly'
// * back
import LatPullDown from './components/back/LatPullDown'
import Row from './components/back/Row'
// * shoulders
import LateralRaise from './components/shoulders/LateralRaise'
import ReverseFly from './components/shoulders/ReverseFly'
// * arms
import BicepCurl from './components/arms/BicepCurl'
import TricepPushdown from './components/arms/TricepPushdown'
// * legs
import Squat from './components/legs/Squat'
import LegPress from './components/legs/LegPress'
// * core
import Core from './components/core/Core'
// * cardio
import Cardio from './components/cardio/Cardio'
// * auth
import Login from './components/_auth/Login'
import Register from './components/_auth/Register'

const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      {/* <AnimatePresence> */}
      <Switch location={location} key={location.key}>
        <Route path='/' exact component={Dashboard} />
        {/* chest */}
        <Route path='/benchpress' component={BenchPress} />
        <Route path='/cablefly' component={CableFly} />
        {/* back */}
        <Route path='/latpulldown' component={LatPullDown} />
        <Route path='/row' component={Row} />
        {/* shoulders */}
        <Route path='/lateralraise' component={LateralRaise} />
        <Route path='/reversefly' component={ReverseFly} />
        {/* arms */}
        <Route path='/bicepcurl' component={BicepCurl} />
        <Route path='/triceppushdown' component={TricepPushdown} />
        {/* legs */}
        <Route path='/squat' component={Squat} />
        <Route path='/legpress' component={LegPress} />
        {/* core */}
        <Route path='/core' component={Core} />
        {/* cardio */}
        <Route path='/cardio' component={Cardio} />
        {/* auth */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
      {/* </AnimatePresence> */}
    </>
  )
}

export default App
