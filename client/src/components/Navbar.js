import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './_data/navbarData'
import { IconContext } from 'react-icons'
import { VscClose } from 'react-icons/vsc'
import logo from '../assets/logowhite.png'

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false)
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
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='logo' style={{ height: '50px' }} />
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
            {SidebarData.map((navItem, index) => {
              return (
                <li key={index} className={navItem.className}>
                  <Link to={navItem.path}>
                    {navItem.icon}
                    <span>{navItem.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
