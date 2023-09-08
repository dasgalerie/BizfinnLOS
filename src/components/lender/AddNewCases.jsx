import React, { useEffect, useState } from 'react'
import LenderDashboardMain from './LenderDashboardMain'
import { useNavigate } from 'react-router-dom'
// import BorrowerDashboardMain from '../borrower/BorrowerDashboardMain'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
// import BackBtn from '../admin/BackBtn'
import upload from '../assets/imgs/icosn/upload.svg'
const AddNewCases = () => {
  const navigate = useNavigate()
  const [borrowernamelist, setborrowernamelist] = useState('')
  // validation error hooks
  const [requirementError, setRequirementError] = useState('');
  const [borrowernameerror, setborrowernameerror] = useState('');
  const [loanTypeValidationError, setLoanTypeValidationError] = useState('');
  const [collateralValidationError, setCollateralValidationError] = useState('');

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
  const [requirement, setrequirement] = useState('')
  const [borrowerId, setborrowerId] = useState('')
  const [type_of_loan, settype_of_loan] = useState('')
  const [nature_of_collateral, setnature_of_collateral] = useState('')

  let items = {
    requirement,
    type_of_loan,
    nature_of_collateral,
    borrowerId
  }

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // ================================================
  // ===========Add new cases==============
  // ================================================
  const AddNewCasesAPI = (e) => {
    e.preventDefault()

    if (
      requirementError
    ) {
      toast.error('Please fix the validation errors before submitting.', {
        autoClose: 3000
      });
      return;
    }


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(items);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://bizfinn.onrender.com/createCases", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result?.success) {
          toast.success(result?.msg, {
            autoClose: 2000
          })
          setTimeout(() => {
            navigate('/lender_cases')
          }, 2000)
        }
      })
      .catch(error => console.log('error', error));
  }

  const validateRequirement = () => {
    if (!requirement) {
      setRequirementError('This field is required.');
    } else if (!/^[0-9]*$/.test(requirement)) {
      setRequirementError('Please enter a valid whole number.');
    } else {
      setRequirementError('');
    }
  };



  // ==========Get Borrower name list================
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://bizfinn.onrender.com/getBorrowers", requestOptions)
      .then(response => response.json())
      .then(result => {
        setborrowernamelist(result)
      })
      .catch(error => console.log('error', error));
  }, [])


  return (
    <>
      <LenderDashboardMain>
        <section className="side_content_main_box add_new_cases_main">
          <div className="page_heading_div">
            <div className="back_btn_filter_main">
              <div className="back_btn_filter_inner">
                {/* <BackBtn /> */}
                <h2>Add New Cases</h2>
              </div>
            </div>
          </div>
          <ToastContainer />

          <section className="profile_details_main_section">
            <div className="row">
              <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                <form onSubmit={AddNewCasesAPI}>
                  <div className="width_60">
                    {/* loan amount */}
                    <div className="">
                      <input
                        type="number"
                        className="form_input_box"
                        placeholder="How much loan you need (in INR)?"
                        autoCorrect="off"
                        autoComplete="off"
                        value={requirement}
                        onChange={e => setrequirement(e.target.value)}
                        onBlur={validateRequirement}
                        pattern="[0-9]*"
                        required
                      />
                      <div className='error_msg same_line_error_msg'>
                        {requirementError && <div className='error'>{requirementError}</div>}
                      </div>
                    </div>

                    {/* borrower name */}

                    <div className="">
                      <select
                        name="borrower-name"
                        className="form_input_box custom_select"
                        value={borrowerId} onChange={event => {
                          setborrowerId(event.target.value)
                        }}
                        required
                      >
                        <option value="">Select Borrower Name</option>

                        {borrowernamelist?.data?.map(currEle => {
                          return (
                            <>
                              <option value={currEle?._id}>{currEle?.name} </option>
                            </>
                          )
                        })}
                      </select>
                    </div>



                    {/* type of loan */}
                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={type_of_loan} onChange={event => {
                          settype_of_loan(event.target.value);
                          if (event.target.value === '') {
                            setLoanTypeValidationError('Please select a loan type.');
                            event.target.setCustomValidity('Please select a loan type.');
                          } else {
                            setLoanTypeValidationError('');
                            event.target.setCustomValidity('');
                          }
                        }}
                        required
                      >
                        <option value="">You are looking for type of loan</option>
                        <option value="Secure">Secure</option>
                        <option value="unsecure">unsecure</option>
                      </select>
                      <div className='error_msg same_line_error_msg'>
                        {loanTypeValidationError && <div className="error">{loanTypeValidationError}</div>}
                      </div>
                    </div>

                    {/* nature */}
                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={nature_of_collateral}
                        onChange={event => {
                          setnature_of_collateral(event.target.value);
                          if (event.target.value === '') {
                            setCollateralValidationError('Please select nature of collateral.');
                            event.target.setCustomValidity('Please select nature of collateral.');
                          } else {
                            setCollateralValidationError('');
                            event.target.setCustomValidity('');
                          }
                        }}
                        required
                      >
                        <option value="">
                          Nature of Collateral (Secure/unsecure)
                        </option>
                        <option value="Secure">Secure</option>
                        <option value="unsecure">unsecure</option>
                      </select>

                      <div className='error_msg same_line_error_msg'>
                        {collateralValidationError && <div className="error">{collateralValidationError}</div>}
                      </div>
                    </div>


                    <div className="dashboard_add_new_btn mt-4">
                      <button type='submit' className="">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
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
      </LenderDashboardMain>
    </>
  )
}

export default AddNewCases
