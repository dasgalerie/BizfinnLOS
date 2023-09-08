import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Filter from '../admin/Filter'
// import BackBtn from '../admin/BackBtn'
import dayjs from 'dayjs'
import LenderDashboardMain from './LenderDashboardMain'

const LenderNotifications = () => {
  return (
    <>
      <LenderDashboardMain>
        <section className='side_content_main_box'>
          <div className='page_heading_div'>
            <div className='back_btn_filter_main'>
              <div className='back_btn_filter_inner'>
                {/* <BackBtn /> */}
                <h2>Notifications</h2>
              </div>
              {/* <Filter /> */}
            </div>
          </div>

          <section className='tabs_main_section commaon_tabs_main_section'>
            <div className=''>
              <div className='notification_div_single'>
                <div>
                  <h3>Received Query of Case No. 110030 🎉</h3>
                  <p>Completed no errors found</p>
                </div>
                <div>
                  <h4 className='date'>DD/MM/YYYY</h4>
                </div>
              </div>
            </div>
            <div className='notification_div'>
              <div className='Update_Share_Details_btns_div'>
                <Link to=''>Show More</Link>
              </div>
            </div>
          </section>
        </section>
      </LenderDashboardMain>
    </>
  )
}

export default LenderNotifications
