import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='logo-container'>
        <img src={logo} alt='' />
      </div>
      <form action=''>
        <input type='text' placeholder='username' />
        <input type='passowrd' placeholder='password' />
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
