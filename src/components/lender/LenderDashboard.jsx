import React from 'react'
// import Filter from '../admin/Filter'
import back_btn from '../assets/imgs/icosn/back-btn.svg'
import { Link } from 'react-router-dom'
import LenderDashboardMain from './LenderDashboardMain'

const LenderDashboard = () => {
  return (
    <LenderDashboardMain>
      <section className='side_content_main_box'>
        <div className='page_heading_div'>
          <div className='back_btn_filter_main'>
            <h2> Dashboard</h2>
            {/* <Filter /> */}
          </div>
        </div>
        <section className='dashboard_boxes_main_section'>
          <div className='row'>
            <div className=' col-lg-3 col-md-4 col-sm-12'>
              <div className='dashboard_boxes_single'>
                <h2>3</h2>
                <h4>Pending Cases</h4>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-12'>
              <div className='dashboard_boxes_single'>
                <h2>3</h2>
                <h4>Pending Cases</h4>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-12'>
              <div className='dashboard_boxes_single'>
                <h2>3</h2>
                <h4>Pending Cases</h4>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-12'>
              <div className='dashboard_boxes_single'>
                <h2>3</h2>
                <h4>Pending Cases</h4>
              </div>
            </div>
          </div>
        </section>
      </section>
    </LenderDashboardMain>
  )
}

export default LenderDashboard
