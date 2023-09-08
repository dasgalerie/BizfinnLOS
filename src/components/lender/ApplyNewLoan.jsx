import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BorrowerDashboardMain from '../borrower/BorrowerDashboardMain'
import { Link } from 'react-router-dom'
import BackBtn from '../admin/BackBtn'
import upload from '../assets/imgs/icosn/upload.svg'

const Cases = () => {
  const navigate = useNavigate()

  function navigateDetailPage(event) {
    navigate('/case-details')
  }

  const [AOA, setAOA] = useState(null)
  const [MOA, setMOA] = useState(null)
  const [COI, setCOI] = useState(null)
  const [GST, setGST] = useState(null)
  const [Directors, setDirectors] = useState(null)
  const [PAN, setPAN] = useState(null)
  const [KYCDirectors, setKYCDirectors] = useState(null)
  const [AuditedStatement, setAuditedStatement] = useState(null)
  const [GSTLast, setGSTLast] = useState(null)
  const [BankStatement, setBankStatement] = useState(null)
  const [provisionalbalance, setprovisionalbalance] = useState(null)
  const [ITR, setITR] = useState(null)
  const [Debtserviced, setDebtserviced] = useState(null)
  const [MIS, setMIS] = useState(null)

  const handleFileChange = (event, setterFunction) => {
    const selectedFile = event.target.files[0]
    setterFunction(selectedFile)
  }

  return (
    <>
      <BorrowerDashboardMain>
        <section className="side_content_main_box">
          <div className="page_heading_div">
            <div className="back_btn_filter_main">
              <div className="back_btn_filter_inner">
                <BackBtn />
                <h2>Apply for New Loan</h2>
              </div>
            </div>
          </div>

          <section className="profile_details_main_section">
            <div className="row">
              <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                <div className="width_60">
                  <div className="">
                    <input
                      type="text"
                      className="form_input_box"
                      placeholder="How much loan you need (in INR)?"
                      autoCorrect="off"
                      autoComplete="off"
                    />
                  </div>
                  <div className="">
                    <select
                      name="annual-turn"
                      className="form_input_box custom_select"
                    >
                      <option value="">You are looking for type of loan</option>
                      <option value="">Secure</option>
                      <option value="">unsecure</option>
                    </select>
                  </div>
                  <div className="">
                    <select
                      name="annual-turn"
                      className="form_input_box custom_select"
                    >
                      <option value="">
                        Nature of Collateral (Secure/unsecure)
                      </option>
                      <option value="">Secure</option>
                      <option value="">unsecure</option>
                    </select>
                  </div>
                </div>

                <div className="dashboard_add_new_btn">
                  <Link to="/borrower_cases" className="">
                    Submit
                  </Link>
                </div>
              </div>

              <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 margin_top_30">
                <h3>
                  Financial Details <span> (Upload when month change)</span>{' '}
                </h3>

                {/* AuditedStatement */}
                <div className="custom_file_upload_main">
                  <label
                    htmlFor="AuditedStatement"
                    className="file-input-button"
                  >
                    {AuditedStatement ? (
                      <div className="file_upload_flex">
                        <span> {AuditedStatement.name}</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    ) : (
                      <div className="file_upload_flex">
                        <span>
                          Upload Audited Financial statements for last 3 years
                        </span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="AuditedStatement"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, setAuditedStatement)}
                  />
                </div>

                {/* GSTLast */}
                <div className="custom_file_upload_main">
                  <label htmlFor="GSTLast" className="file-input-button">
                    {GSTLast ? (
                      <div className="file_upload_flex">
                        <span> {GSTLast.name}</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    ) : (
                      <div className="file_upload_flex">
                        <span>Upload GST Filing for last 12 months</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="GSTLast"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, setGSTLast)}
                  />
                </div>

                {/* BankStatement */}
                <div className="custom_file_upload_main">
                  <label htmlFor="BankStatement" className="file-input-button">
                    {BankStatement ? (
                      <div className="file_upload_flex">
                        <span> {BankStatement.name}</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    ) : (
                      <div className="file_upload_flex">
                        <span>Upload all Bank Statement of last 24 months</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="BankStatement"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, setBankStatement)}
                  />
                </div>

                {/* provisionalbalance */}
                <div className="custom_file_upload_main">
                  <label
                    htmlFor="provisionalbalance"
                    className="file-input-button"
                  >
                    {provisionalbalance ? (
                      <div className="file_upload_flex">
                        <span> {provisionalbalance.name}</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    ) : (
                      <div className="file_upload_flex">
                        <span>
                          Upload provisional balance sheet for the current year
                        </span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="provisionalbalance"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, setprovisionalbalance)}
                  />
                </div>

                {/* ITR */}
                <div className="custom_file_upload_main">
                  <label htmlFor="ITR" className="file-input-button">
                    {ITR ? (
                      <div className="file_upload_flex">
                        <span> {ITR.name}</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    ) : (
                      <div className="file_upload_flex">
                        <span>
                          Upload ITR acknowledgement form for last 2 years
                        </span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="ITR"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, setITR)}
                  />
                </div>

                {/* Debtserviced */}
                <div className="custom_file_upload_main">
                  <label htmlFor="Debtserviced" className="file-input-button">
                    {Debtserviced ? (
                      <div className="file_upload_flex">
                        <span> {Debtserviced.name}</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    ) : (
                      <div className="file_upload_flex">
                        <span>
                          Upload Debt serviced during the current FY (Principal
                          + interest) (optional)
                        </span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="Debtserviced"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, setDebtserviced)}
                  />
                </div>

                {/* MIS */}
                <div className="custom_file_upload_main">
                  <label htmlFor="MIS" className="file-input-button">
                    {MIS ? (
                      <div className="file_upload_flex">
                        <span> {MIS.name}</span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    ) : (
                      <div className="file_upload_flex">
                        <span>
                          Upload MIS and additional Documents (optional)
                        </span>
                        <img src={upload} alt="upload" className="img-fluid" />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="MIS"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, setMIS)}
                  />
                </div>
                {/* <div className="dashboard_add_new_btn">
                  <Link to="/borrower" className="">
                    Submit
                  </Link>
                </div> */}
              </div>
            </div>
          </section>
        </section>
      </BorrowerDashboardMain>
    </>
  )
}

export default Cases
