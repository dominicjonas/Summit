import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './_data/navbarData'
import { IconContext } from 'react-icons'
import { VscClose } from 'react-icons/vsc'
import logo from '../assets/logowhite.png'

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false)

  const showSidebar = () => setSideBar(!sidebar)

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
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <VscClose />
              </Link>
            </li>
            {SidebarData.map((navitem, index) => {
              return (
                <li key={index} className={navitem.className}>
                  <Link to={navitem.path}>
                    {navitem.icon}
                    <span>{navitem.title}</span>
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
