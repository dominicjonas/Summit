import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { loginUser } from '../api/callerFunctions'

import logo from '../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { CgArrowDownR, CgArrowUpR } from 'react-icons/cg'

import axios from 'axios'

const Login = () => {
  const history = useHistory()
  const [loginData, setLoginData] = useState({
    formData: {
      username: '',
      password: ''
    }
  })

  const handleChange = (e) => {
    const formData = {
      ...loginData.formData,
      [e.target.name]: e.target.value
    }
    setLoginData({ formData })
    console.log(loginData)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
    console.log('TOKEN', token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        'https://summit2app.herokuapp.com/exercise/login/',
        loginData.formData
      )
      console.log('data is: ', data)
      setTokenToLocalStorage(data.token)

      localStorage.setItem('id', data.userId)
      console.log('logged in user id: ', data.userId)

      history.push('/')
    } catch (err) {
      console.error('error login in user', err)
    }
  }

  return (
    <div id='login'>
      <div className='login-container'>
        <div className='logo-container'>
          <img src={logo} alt='' />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            value={loginData.formData.username}
            required
            onChange={handleChange}
            placeholder='Enter Username'
            autoComplete='off'
          />
          <input
            name='password'
            type='password'
            value={loginData.formData.password}
            required
            onChange={handleChange}
            placeholder='Enter Password'
            autoComplete='new-password'
          />
          <p>
            not a member?{' '}
            <Link to='/register' className='register-link'>
              register here
            </Link>
          </p>
          <button>LOGIN</button>
        </form>
        <a href='#summit-hero-1'>
          <div className='arrows'>
            <IoIosArrowDown className='arrow-1' />
            <IoIosArrowDown className='arrow-2' />
          </div>
        </a>
        <Link to='/'>
          <AiOutlineHome className='home-link' />
        </Link>
      </div>

      <div className='summit-hero-container'>
        <section id='summit-hero-1' className='summit-hero-1'>
          <a href='#login'>
            <CgArrowUpR className='up-down-icon' />
          </a>
          <h1>What is summit?</h1>
          <a href='#summit-hero-2'>
            <CgArrowDownR className='up-down-icon' />
          </a>
        </section>

        <section id='summit-hero-2' className='summit-hero-2'>
          <a href='#summit-hero-1'>
            <CgArrowUpR className='up-down-icon' />
          </a>
          <h1>How is summit?</h1>
          <a href='#summit-hero-3'>
            <CgArrowDownR className='up-down-icon' />
          </a>
        </section>

        <section id='summit-hero-3' className='summit-hero-3'>
          <a href='#summit-hero-2'>
            <CgArrowUpR className='up-down-icon' />
          </a>
          <h1>Why is summit?</h1>
          <a href='#summit-hero-4'>
            <CgArrowDownR className='up-down-icon' />
          </a>
        </section>

        <section id='summit-hero-4' className='summit-hero-4'>
          <a href='#login'>
            <CgArrowUpR className='up-down-icon' />
          </a>
          <h1>Contact us</h1>
        </section>
      </div>
    </div>
  )
}

export default Login
