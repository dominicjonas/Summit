import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { loginUser } from '../api/callerFunctions'

import logo from '../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'

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
        `http://localhost:8000/exercise/accounts/login/`,
        loginData.formData
      )
      console.log('data is: ', data)
      setTokenToLocalStorage(data.token)
      if (res.status === 202) {
        history.push('/')
      }
    } catch (err) {
      console.error('error login in user', err)
    }
  }

  return (
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
          placeholder='Enter username..'
          autoComplete='off'
        />
        <input
          name='password'
          type='password'
          value={loginData.formData.password}
          required
          onChange={handleChange}
          placeholder='Enter password..'
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
      <div className='arrows'>
        <IoIosArrowDown className='arrow-1' />
        <IoIosArrowDown className='arrow-2' />
      </div>
      <Link to='/'>
        <AiOutlineHome className='home-link' />
      </Link>
    </div>
  )
}

export default Login
