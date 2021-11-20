import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { FiLogIn } from 'react-icons/fi'
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
    path: '/benchpress',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Back',
    path: '/latpulldown',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Shoulders',
    path: '/lateralraise',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Arms',
    path: '/bicepcurl',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Legs',
    path: '/squat',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Core',
    path: '/crunches',
    icon: <IoIosArrowForward />,
    className: 'nav-text'
  },
  {
    title: 'Cardio',
    path: '/running',
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
    title: 'Register',
    path: '/register',
    icon: <GoSignIn />,
    className: 'nav-text'
  }
]
