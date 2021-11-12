import React from 'react'

const Toggle = () => {
  return (
    <div className='toggle' aria-label='theme-toggle' role='radiogroup'>
      <div className='toggle__wrapper'>
        <input type='radio' name='theme' id='dark' checked />
        <input type='radio' name='theme' id='light' />
        <span aria-hidden='true' className='toggle__background'></span>
        <span aria-hidden='true' className='toggle__button'></span>
      </div>
      <label for='dark'>Dark</label>
      <label for='light'>Light</label>
    </div>
  )
}

export default Toggle
