import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// import { registerUser } from '../api/callerFunctions'

import logo from '../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'

import axios from 'axios'

const Register = () => {
  const history = useHistory()
  const [registerData, setRegisterData] = useState({
    formData: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  })

  const handleChange = (e) => {
    const formData = {
      ...registerData.formData,
      [e.target.name]: e.target.value
    }
    setRegisterData({ formData })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // const res = await registerUser(registerData.formData)
      await axios.post(
        'https://summit2app.herokuapp.com/exercise/register/',
        registerData.formData
      )
      history.push('/login')
      // if (res.status === 201) {
      //   const currentId = res.data.id
      //   console.log('the current user id: ', currentId)
      // }
    } catch (err) {
      console.error('Error registering user', err)
    }
  }

  return (
    <div className='login-container'>
      <div className='logo-container'>
        <img src={logo} alt='' />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Username'
          type='text'
          name='username'
          value={registerData.formData.username}
          required
          onChange={handleChange}
        />
        <input
          placeholder='Email'
          type='email'
          name='email'
          value={registerData.formData.email}
          required
          onChange={handleChange}
        />
        <input
          placeholder='Password'
          type='password'
          name='password'
          value={registerData.formData.password}
          required
          autoComplete='new-password'
          onChange={handleChange}
        />
        <input
          placeholder='Password Confirmation'
          type='password'
          name='password_confirmation'
          value={registerData.formData.password_confirmation}
          required
          autoComplete='new-password'
          onChange={handleChange}
        />
        <button>REGISTER</button>
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

export default Register
