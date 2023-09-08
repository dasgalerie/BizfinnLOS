import React from 'react'
import logo from '../../assets/imgs/logo.png'
import next from '../../assets/imgs/icosn/next.svg'

import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <section className='auth_main_section full_container auth_banner_img'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='auth_content_col'>
                <img src={logo} alt='logo' className='img-fluid logo' />
                <div className='auth_content_div'>
                  <h1>
                    Get the <br />
                    <span>
                      Funding <br /> You Need
                    </span>
                  </h1>
                  <p>
                    We provide working capital solutions to help businesses like
                    yours grow and succeed. And there is no collateral required.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='auth_second_col_main_outer'>
                <div className='auth_second_col_main'>
                  {/* <div className="form_round_box"></div> */}
                  <div className='content borrower_content'>
                    <h2>Apply for Business Loan</h2>
                    <input
                      type='text'
                      className='form_input_box'
                      placeholder='Enter Company Name'
                      autoCorrect='off'
                      autoComplete='off'
                    />

                    <div className='register_phone_field'>
                      <input
                        type='number'
                        className='form_input_box'
                        placeholder='Enter Phone Number'
                        autoCorrect='off'
                        autoComplete='off'
                      />
                      <button className='phone_num_next_btn'>
                        <img src={next} alt='next' className='img-fluid' />
                      </button>
                    </div>
                    <input
                      type='tel'
                      className='form_input_box'
                      placeholder='Enter OTP Received'
                      autoCorrect='off'
                      autoComplete='off'
                    />
                    <div className=''>
                      <select name='annual-turn' className='form_input_box'>
                        <option value=''>Select your annual turn over</option>
                        <option value='1cr'>1 CR</option>
                        <option value='5cr'>5 CR</option>
                        <option value='10cr'>10 CR</option>
                      </select>
                    </div>
                    <div className='register_checkbox'>
                      <input
                        type='checkbox'
                        id='registerTerms'
                        name='registerTerms'
                        value='yes'
                      />
                      <label for='registerTerms'>
                        {' '}
                        I hereby confirm that I have read, understood, and agree
                        to the "T & C", "Privacy Policy"
                      </label>
                    </div>

                    <div className='login_register_btn_div'>
                      <Link
                        to='/borrower-dashboard'
                        className='blue_btn login_register_btn'
                      >
                        Register
                      </Link>
                      <Link
                        to='/borrower-login'
                        className='login_register_btn register_btn'
                      >
                        Sign In
                      </Link>
                    </div>
                    {/* =============== Error msg=============== */}
                    {/* <div className="error_msg">
                      <p>Wrong Credentials!</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
