import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { registerUser } from '../api/callerFunctions'

import logo from '../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'

const Register = () => {
  const history = useHistory()
  const [registerData, setRegisterData] = useState({
    formData: {
      username: '',
      email: '',
      password: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await registerUser(registerData.formData)
      if (res.status === 201) {
        history.push('/login')
        const currentId = res.data.id
        console.log('the current user id: ', currentId)
      }
    } catch (err) {
      console.error('Error registering user', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...registerData.formData,
      [e.target.name]: e.target.value
    }

    setRegisterData({ formData })
    console.log(formData)
  }

  return (
    <div className='login-container'>
      <div className='logo-container'>
        <img src={logo} alt='' />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username..'
          name='username'
          value={registerData.formData.username}
          required
          autoComplete='off'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email..'
          name='email'
          value={registerData.formData.email}
          required
          autoComplete='off'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password..'
          name='password'
          value={registerData.formData.password}
          required
          autoComplete='off'
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
