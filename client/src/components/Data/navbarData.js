import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { GoSignIn } from 'react-icons/go'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
    className: 'nav-text'
  },
  {
    title: 'Chest',
    path: '/chest',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Back',
    path: '/back',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Shoulders',
    path: '/shoulders',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Arms',
    path: '/arms',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Legs',
    path: '/legs',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Core',
    path: '/core',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Cardio',
    path: '/cardio',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FiLogIn />,
    className: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/login',
    icon: <FiLogOut />,
    className: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <GoSignIn />,
    className: 'nav-text'
  }
]
