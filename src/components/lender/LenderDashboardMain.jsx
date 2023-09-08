import React, { useState } from 'react'
import Sidebar from '../lender/Sidebar'
import Header from '../lender/Header'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const LenderDashboardMain = ({ children }) => {
  const [isToggled, setIsToggled] = useState(true)
  const toggleClass = () => {
    setIsToggled(!isToggled)
  }
  return (
    <div className='main_section'>
      <section className='main__section'>
        <div className={isToggled ? 'sidebar_div' : 'sidebar_div_coll'}>
          <Sidebar />
        </div>
        <div className={isToggled ? 'SideContent_div' : 'SideContent_div_coll'}>
          <button className='menu_toggle_btn' onClick={toggleClass}>
            <RxHamburgerMenu className='icon' />
          </button>
          <button className='menu_close_btn' onClick={toggleClass}>
            <IoMdClose className='icon' />
          </button>
          <Header />
          {children}
        </div>
      </section>
    </div>
  )
}

export default LenderDashboardMain
