import React from 'react'
import logo from '../assets/imgs/logo-white.png'
import home from '../assets/imgs/icosn/home.svg'
import Borrowers from '../assets/imgs/icosn/Borrowers.svg'
import Cases from '../assets/imgs/icosn/Cases.svg'
import Lenders from '../assets/imgs/icosn/Lender.svg'
import Profile from '../assets/imgs/icosn/Profile.svg'
import Query from '../assets/imgs/icosn/Query.svg'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <section className='dashboard_sidebar_main_div'>
        <div className='white_logo_div'>
          <img src={logo} className='img-fluid white_logo' alt='logo' />
        </div>
        <div className='mt_12'>
          <nav>
            <NavLink
              exact
              to='/lender-dashboard'
              className='sidebar_link '
              activeClassName='active_link'
            >
              <img
                src={home}
                alt='icon'
                className='img-fluid sidebar_link_icon'
              />{' '}
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to='/lender_profile'
              className='sidebar_link '
              activeClassName='active'
            >
              <img
                src={Profile}
                alt='icon'
                className='img-fluid sidebar_link_icon'
              />{' '}
              <span> Profile</span>
            </NavLink>
            <NavLink
              to='/lender_cases'
              className='sidebar_link '
              activeClassName='active_link'
            >
              <img
                src={Cases}
                alt='icon'
                className='img-fluid sidebar_link_icon'
              />{' '}
              <span> Cases</span>
            </NavLink>
            <NavLink
              to='/lender_query'
              className='sidebar_link '
              activeClassName='active_link'
            >
              <img
                src={Query}
                alt='icon'
                className='img-fluid sidebar_link_icon'
              />{' '}
              <span> Query</span>
            </NavLink>
          </nav>
        </div>
        <div className='signout_btn_div'>
          <NavLink to='/lender-login' className=''>
            Sign-out
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default Sidebar
