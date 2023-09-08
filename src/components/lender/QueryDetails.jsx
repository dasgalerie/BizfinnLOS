import React from 'react'
import { Link } from 'react-router-dom'
import cross from '../assets/imgs/icosn/cross.svg'
import upload from '../assets/imgs/icosn/upload.svg'
import check from '../assets/imgs/icosn/check.svg'
// import Filter from '../admin/Filter'
// import BackBtn from '../admin/BackBtn'
import LenderDashboardMain from './LenderDashboardMain'
const QueryDetails = () => {
  return (
    <>
      <LenderDashboardMain>
        <div className='full_width_bg_main'>
          <section className='side_content_main_box'>
            <div className='page_heading_div'>
              <div className='back_btn_filter_main'>
                {/* <BackBtn /> */}
                <h2>Query</h2>
              </div>
            </div>

            <section className=''>
              <section className='table_main_section'>
                <div className='table-responsive'>
                  <table className='table   commaon_table'>
                    <thead className='table_head'>
                      <tr>
                        <th>Case No</th>
                        <th>Date</th>
                        <th>Borrower Name</th>
                        <th>Business Structure</th>
                        <th>Turnover</th>
                        <th>Industry</th>
                        <th>Status</th>
                        <th>Loan Ask</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='name'>
                          <Link to='/lender_query_details'> 110030 </Link>
                        </td>
                        <td>11/11/2021</td>
                        <td className='name'>
                          <Link to='#'> Sanjeev Mehta</Link>
                        </td>
                        <td>Private Ltd</td>
                        <td>1 Cr</td>
                        <td>Automobile</td>
                        <td>
                          <span className='table_pending_btn '>Pending</span>
                        </td>
                        <td>1 Cr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </section>

            <section className='case_detail_content_main_section'>
              <div className='row'>
                <div className='col-xl-7 col-lg-12 col-md-12 col-sm-12 '>
                  <div className='two_col_right_gap '>
                    <div className='case_query_reject_btn_main_flex'>
                      <div>
                        <div className='case_detail_single_detail'>
                          <h2>You are looking for *</h2>
                          <p>Secured Term Loan</p>
                        </div>
                        <div className='case_detail_single_detail'>
                          <h2>How much loan you need (in INR)?</h2>
                          <p>1 Cr</p>
                        </div>
                      </div>

                      <div className='case_query_reject_btn'>
                        <Link to='/query'>Edit</Link>
                        <Link to='/cases'>Cancel</Link>
                      </div>
                    </div>

                    <div className='query_details_steps_main'>
                      <div className='query_details_steps_single'>
                        <div className='steps_dots_main steps_dot_active'>
                          <span></span>
                        </div>
                        <div className='query_details_steps_inner_main'>
                          <div>
                            <h4>Lender Remarks</h4>
                            <h5>Documents Incomplete</h5>
                          </div>
                          <p>DD/MM/YYYY</p>
                        </div>
                      </div>

                      <div className='query_details_steps_single'>
                        <div className='steps_dots_main '>
                          <span></span>
                        </div>
                        <div className='query_details_steps_inner_main'>
                          <div>
                            <h4>Lender Remarks</h4>
                            <h5>Documents Incomplete</h5>
                          </div>
                          <p>DD/MM/YYYY</p>
                        </div>
                      </div>

                      <div className='query_details_steps_single'>
                        <div className='steps_dots_main '>
                          <span></span>
                        </div>
                        <div className='query_details_steps_inner_main'>
                          <div>
                            <h4>Lender Remarks</h4>
                            <h5>Documents Incomplete</h5>
                          </div>
                          <p>DD/MM/YYYY</p>
                        </div>
                      </div>
                    </div>

                    <div className='query_details_Loan_status_div'>
                      <h3>
                        Status :<span> Incomplete</span>
                      </h3>
                    </div>

                    <div className='loan_approve_message_btn'>
                      <div className='login_register_btn_div'>
                        <Link
                          to='/query'
                          className='blue_btn login_register_btn'
                        >
                          Send
                        </Link>
                        <Link
                          to='#'
                          className='login_register_btn register_btn simple_btn_hover'
                        >
                          Message
                        </Link>
                        <Link
                          to='#'
                          className='login_register_btn register_btn simple_btn_hover'
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12 profile_details_main_section'>
                  <h3 className='margin_top_space'>
                    Financial Details <span> (Upload when month change)</span>
                  </h3>
                  <div>
                    <div className='finanicial_details_single'>
                      <div className='upload-btn-wrapper'>
                        <button className='file_upload_btn form_input_box'>
                          <span>
                            Upload Audited Financial statements for last 3 years
                          </span>
                          <img
                            src={upload}
                            alt='upload'
                            className='img-fluid'
                          />
                        </button>
                        <input type='file' className='form_input_box' />
                      </div>
                      <div className='Incomplete_complete_status red_green_status_main'>
                        <button className='Incomplete'>
                          <img src={cross} alt='cross' className='img-fluid' />
                          Incomplete
                        </button>
                      </div>
                    </div>

                    <div className='finanicial_details_single'>
                      <div className='upload-btn-wrapper'>
                        <button className='file_upload_btn form_input_box'>
                          <span> Upload GST Filing for last 12 months</span>
                          <img
                            src={upload}
                            alt='upload'
                            className='img-fluid'
                          />
                        </button>
                        <input type='file' className='form_input_box' />
                      </div>
                      <div className='Incomplete_complete_status red_green_status_main'>
                        <button className='Incomplete'>
                          <img src={cross} alt='cross' className='img-fluid' />
                          Incomplete
                        </button>
                      </div>
                    </div>

                    <div className='finanicial_details_single'>
                      <div className='upload-btn-wrapper'>
                        <button className='file_upload_btn form_input_box'>
                          <span> Upload Bank Statement of last 12 months</span>
                          <img
                            src={upload}
                            alt='upload'
                            className='img-fluid'
                          />
                        </button>
                        <input type='file' className='form_input_box' />
                      </div>
                      <div className='Incomplete_complete_status red_green_status_main'>
                        <button className='Incomplete Complete'>
                          <img src={check} alt='cross' className='img-fluid' />
                          Complete
                        </button>
                      </div>
                    </div>

                    <div className='finanicial_details_single'>
                      <div className='upload-btn-wrapper'>
                        <button className='file_upload_btn form_input_box'>
                          <span>
                            Upload provisional balance sheet for the current
                            year
                          </span>
                          <img
                            src={upload}
                            alt='upload'
                            className='img-fluid'
                          />
                        </button>
                        <input type='file' className='form_input_box' />
                      </div>
                      <div className='Incomplete_complete_status red_green_status_main'>
                        <button className='Incomplete Complete'>
                          <img src={check} alt='cross' className='img-fluid' />
                          Complete
                        </button>
                      </div>
                    </div>

                    <div className='finanicial_details_single'>
                      <div className='upload-btn-wrapper'>
                        <button className='file_upload_btn form_input_box'>
                          <span>
                            Upload ITR acknowledgement form for last 2 years
                          </span>
                          <img
                            src={upload}
                            alt='upload'
                            className='img-fluid'
                          />
                        </button>
                        <input type='file' className='form_input_box' />
                      </div>
                      <div className='Incomplete_complete_status red_green_status_main'>
                        <button className='Incomplete'>
                          <img src={cross} alt='cross' className='img-fluid' />
                          Incomplete
                        </button>
                      </div>
                    </div>

                    <div className='finanicial_details_single'>
                      <div className='upload-btn-wrapper'>
                        <button className='file_upload_btn form_input_box'>
                          <span>
                            Upload Debt serviced during the current FY
                            (Principal + interest repayment during the year)
                          </span>
                          <img
                            src={upload}
                            alt='upload'
                            className='img-fluid'
                          />
                        </button>
                        <input type='file' className='form_input_box' />
                      </div>
                      <div className='Incomplete_complete_status red_green_status_main'>
                        <button className='Incomplete'>
                          <img src={cross} alt='cross' className='img-fluid' />
                          Incomplete
                        </button>
                      </div>
                    </div>

                    <div className='finanicial_details_single'>
                      <div className='upload-btn-wrapper'>
                        <button className='file_upload_btn form_input_box'>
                          <span>Upload MIS</span>
                          <img
                            src={upload}
                            alt='upload'
                            className='img-fluid'
                          />
                        </button>
                        <input type='file' className='form_input_box' />
                      </div>
                      <div className='Incomplete_complete_status red_green_status_main'>
                        <button className='Incomplete'>
                          <img src={cross} alt='cross' className='img-fluid' />
                          Incomplete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </LenderDashboardMain>
    </>
  )
}

export default QueryDetails
