import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { removeToken, isLoggedIn } from '../api/callerFunctions'
// icons
import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
import { VscClose } from 'react-icons/vsc'
import { FiLogOut, FiLogIn } from 'react-icons/fi'
import { GoSignIn } from 'react-icons/go'

import logo from '../assets/logowhite.png'

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  let menuRef = useRef()

  const showSidebar = (e) => {
    e.preventDefault()
    setSideBar(!sidebar)
  }

  // handle closing the nav when clicking outside nav
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSideBar(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <>
      <IconContext.Provider value={{ color: '#eee' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
          <Link to='/' className='nav-logo'>
            <img
              src={logo}
              alt='logo'
              style={{ height: '50px', width: '50px' }}
            />
          </Link>
        </div>
        <nav
          className={sidebar ? 'nav-menu active' : 'nav-menu'}
          ref={menuRef}
        >
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <VscClose className='nav-close-icon' />
              </Link>
            </li>

            <li className='nav-text'>
              <Link to='/'>
                <MdDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/benchpress'>
                <IoIosArrowForward />
                <span>Chest</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/latpulldown'>
                <IoIosArrowForward />
                <span>Back</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/lateralraise'>
                <IoIosArrowForward />
                <span>Shoulders</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/bicepcurl'>
                <IoIosArrowForward />
                <span>Arms</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/legpress'>
                <IoIosArrowForward />
                <span>Legs</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/crunches'>
                <IoIosArrowForward />
                <span>Core</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/running'>
                <IoIosArrowForward />
                <span>Cardio</span>
              </Link>
            </li>
            {isLoggedIn() ? (
              <>
                <li
                  className='nav-text logout-link'
                  onClick={() => removeToken()}
                >
                  <Link to='/login'>
                    <FiLogOut />
                    <span>Logout</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-text'>
                  <Link to='/login'>
                    <FiLogIn />
                    <span>Login</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='/register'>
                    <GoSignIn />
                    <span>Register</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
