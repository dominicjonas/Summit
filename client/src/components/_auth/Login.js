import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { loginUser } from '../api/callerFunctions'

import logo from '../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { CgArrowDownR, CgArrowUpR } from 'react-icons/cg'
import { RiMessage2Line } from 'react-icons/ri'

import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

const Login = () => {
  const history = useHistory()
  const [loginData, setLoginData] = useState({
    formData: {
      username: '',
      password: ''
    }
  })

  // * Login

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

  // * Contact Form
  const formId = 'ItxqNDGv'
  const formSparkUrl = `https://submit-form.com/${formId}`
  const recaptchaKey = '6LeUelMdAAAAAAsegix3tEq7AdnC_OCWyRhosyDr'
  const recaptchaRef = useRef()

  const initialFormState = {
    email: '',
    name: '',
    message: ''
  }

  const [formState, setFormState] = useState({
    email: '',
    name: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await postSubmission()
    setSubmitting(false)
  }

  const postSubmission = async () => {
    const payLoad = {
      ...formState,
      'g-recaptcha-response': recaptchaToken
    }
    try {
      const result = await axios.post(formSparkUrl, payLoad)
      console.log(result)
      setMessage({
        text: `Message received! We'll be in touch shortly`
      })
      setFormState(initialFormState)
      recaptchaRef.current.reset()
    } catch (err) {
      console.log(err)
      setMessage({
        text: 'Sorry, there was a problem, please try again'
      })
    }
  }

  const updateFormControl = (e) => {
    const { id, value } = e.target
    const formKey = id
    const updatedFormState = { ...formState }
    updatedFormState[formKey] = value
    setFormState(updatedFormState)
  }

  //! https://www.google.com/u/1/recaptcha/admin/create reset domain name once this is deployed!
  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token)
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
          <a href='#contact'>
            <CgArrowDownR className='up-down-icon' />
          </a>
        </section>

        {/* CONTACT FORM */}

        <section className='contact-container' id='contact'>
          <div className='contact-header'>
            <div className='title'>
              <RiMessage2Line />
              <h1>Contact Us</h1>
            </div>
            <p>How can we help?</p>
          </div>
          {message && <div className='submit-message'>{message.text}</div>}

          <form onSubmit={submitForm} className='form-container'>
            <div className='form-input-name-container'>
              <label htmlFor='name'>Name</label>
              <input
                onChange={updateFormControl}
                type='text'
                id='name'
                value={formState.name}
              ></input>
            </div>

            <div className='form-input-email-container'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={updateFormControl}
                type='email'
                id='email'
                value={formState.email}
              ></input>
            </div>

            <div className='form-input-textarea-container'>
              <label htmlFor='message'>Message</label>
              <input
                onChange={updateFormControl}
                type='text'
                id='message'
                value={formState.message}
              ></input>
            </div>

            <ReCAPTCHA
              className='recaptcha'
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              onChange={updateRecaptchaToken}
            />

            <button>
              <div className='button' disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </div>
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Login
