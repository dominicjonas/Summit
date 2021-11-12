import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Dashboard from './components/Dashboard'
import Chest from './components/Chest'
import Back from './components/Back'
import Shoulders from './components/Shoulders'
import Arms from './components/Arms'
import Legs from './components/Legs'
import Core from './components/Core'
import Cardio from './components/Cardio'

import Benchpress from './components/Benchpress'

import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/chest' component={Chest} />
          <Route path='/benchpress' component={Benchpress} />
          <Route path='/back' component={Back} />
          <Route path='/shoulders' component={Shoulders} />
          <Route path='/arms' component={Arms} />
          <Route path='/legs' component={Legs} />
          <Route path='/core' component={Core} />
          <Route path='/cardio' component={Cardio} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
