import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import cross from '../assets/imgs/icosn/cross.png'
import right from '../assets/imgs/icosn/right.png'
import dayjs from 'dayjs'
import { ToastContainer, toast } from 'react-toastify'
import upload from '../assets/imgs/icosn/download.png'
// import BackBtn from '../admin/BackBtn'
import LenderDashboardMain from './LenderDashboardMain'

const CaseDetails = () => {

  const { _id } = useParams()
  const [singleCase, setSingleCase] = useState([])
  let singleCaseLenderList = singleCase?.lenders;
  const navigate = useNavigate();



  const [GSTLast, setGSTLast] = useState(null)
  const [BankStatement, setBankStatement] = useState(null)
  const [UploadDoc, setUploadDoc] = useState(null)

  const handleFileChange = (event, setterFunction) => {
    const selectedFile = event.target.files[0]
    setterFunction(selectedFile)
  }


  // ============MIS================
  const [MISCheckActive, setMISCheckActive] = useState(false);
  const [MIScrossActive, setMIScrossActive] = useState(false);
  const handleClickMISCheck = () => {
    setMISCheckActive(true);
    setMIScrossActive(false);
  };
  const handleClickMISCross = () => {
    setMISCheckActive(false);
    setMIScrossActive(true);
  };


  // ============Debet================
  const [DebetCheckActive, setDebetCheckActive] = useState(false);
  const [DebetcrossActive, setDebetcrossActive] = useState(false);

  const handleClickDebetCheck = () => {
    setDebetCheckActive(true);
    setDebetcrossActive(false);
  };

  const handleClickDebetCross = () => {
    setDebetCheckActive(false);
    setDebetcrossActive(true);
  };


  // ============ITR================
  const [ITRCheckActive, setITRCheckActive] = useState(false);
  const [ITRcrossActive, setITRcrossActive] = useState(false);

  const handleClickITRCheck = () => {
    setITRCheckActive(true);
    setITRcrossActive(false);
  };

  const handleClickITRCross = () => {
    setITRCheckActive(false);
    setITRcrossActive(true);
  };


  // ============Provisional================
  const [ProvisionalCheckActive, setProvisionalCheckActive] = useState(false);
  const [ProvisionalcrossActive, setProvisionalcrossActive] = useState(false);

  const handleClickProvisionalCheck = () => {
    setProvisionalCheckActive(true);
    setProvisionalcrossActive(false);
  };

  const handleClickProvisionalCross = () => {
    setProvisionalCheckActive(false);
    setProvisionalcrossActive(true);
  };


  // ============Bank Statement================
  const [BankCheckActive, setBankCheckActive] = useState(false);
  const [BankcrossActive, setBankcrossActive] = useState(false);

  const handleClickBankCheck = () => {
    setBankCheckActive(true);
    setBankcrossActive(false);
  };

  const handleClickBankCross = () => {
    setBankCheckActive(false);
    setBankcrossActive(true);
  };

  // ============GST Filling================
  const [GSTCheckActive, setGSTCheckActive] = useState(false);
  const [GSTcrossActive, setGSTcrossActive] = useState(false);

  const handleClickGSTCheck = () => {
    setGSTCheckActive(true);
    setGSTcrossActive(false);
  };

  const handleClickGSTCross = () => {
    setGSTCheckActive(false);
    setGSTcrossActive(true);
  };

  // ============Audited================
  const [AuditedCheckActive, setAuditedCheckActive] = useState(false);
  const [AuditedcrossActive, setAuditedcrossActive] = useState(false);

  const handleClickAuditedCheck = () => {
    setAuditedCheckActive(true);
    setAuditedcrossActive(false);
  };

  const handleClickAuditedCross = () => {
    setAuditedCheckActive(false);
    setAuditedcrossActive(true);
  };


  // =======================================
  // ========Get Single case============
  // =======================================
  const GetSingleCase = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://bizfinn.onrender.com/getSingleCase/${_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        setSingleCase(result?.data)
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    GetSingleCase()
  }, [_id])




  const [selectedOption, setSelectedOption] = useState("Approved");
  const [selectedReason, setSelectedReason] = useState("");
  const [ReasonerrorMessage, setReasonErrorMessage] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedReason(""); // Reset selected reason when changing options
    setReasonErrorMessage("");
  };

  const handleReasonClick = (reason) => {

    setSelectedReason(reason);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === "Declined" && !selectedReason) {
      setReasonErrorMessage("Choose a reason for decline the case.");
    } else {
      setReasonErrorMessage("");
      // Perform your submit logic here
    }
  };




  // =======================================
  // ========Case Approved status============
  // =======================================

  const caseApprovedStatus = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "status": 1
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://bizfinn.onrender.com/caseStatus/${_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        if (result.msg) {
          toast.success(result.msg, {
            autoClose: 2000
          })
          setTimeout(() => {
            navigate("/lender_cases");
          }, 2000)
        }
      })
      .catch(error => console.log('error', error));
  }


  // =======================================
  // ========Case reject API============
  // =======================================

  const CaseRejectStatus = () => {
    console.log('case approved')

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "status": 3
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://bizfinn.onrender.com/caseStatus/${_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (selectedOption === "Declined" && !selectedReason) {
          setReasonErrorMessage("Choose a reason for decline the case.");
        } else {
          setReasonErrorMessage("");
          if (result.msg) {
            toast.success(result.msg, {
              autoClose: 2000
            })
            setTimeout(() => {
              navigate("/lender_cases");
            }, 2000)
          }
        }


      })
      .catch(error => console.log('error', error));
  }


  return (
    <>
      <LenderDashboardMain>
        <div className='full_width_bg_main'>
          <section className='side_content_main_box'>
            <div className='page_heading_div'>
              <div className='back_btn_filter_main'>
                {/* <BackBtn /> */}
                <h2>Cases</h2>
              </div>
            </div>

            <section className=''>
              <section className='table_main_section'>
                <div className='table-responsive'>
                  <table className='table   commaon_table'>
                    <thead className='table_head'>
                      <tr>
                        <th scope='col'>Case No</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Borrower Name</th>
                        <th scope='col'>Business Structure</th>
                        <th scope='col'>Turnover</th>
                        <th scope='col'>Industry</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Loan Ask</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='name'>
                          <Link to='/lender_cases_details'> {singleCase?.case_no} </Link>
                        </td>
                        <td>{dayjs(singleCase?.createdAt).format(
                          ' DD-MM-YYYY'
                        )}</td>
                        <td className='name'>
                          {/* <Link to={`/borrower-profile/${singleCase?.borrower?._id}`}> {singleCase?.borrower?.name} </Link> */}
                          <Link to="#"> {singleCase?.borrower?.name} </Link>
                        </td>
                        <td>Private Ltd</td>
                        <td>1 Cr</td>
                        <td></td>

                        <td >{singleCase?.status === 0 ? <span className="table_pending_btn">Pending</span> :
                          singleCase?.status === 1 ? <span className="table_pending_btn table_approved_btn">Approved</span> :
                            singleCase?.status === 3 ? <span className="table_pending_btn">	Rejected</span> :
                              singleCase?.status === 4 ? <span className="table_pending_btn">	Progress</span> : ""}
                        </td>
                        <td>{singleCase?.requirement}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </section>

            <section className='case_detail_content_main_section'>
              <div className='row'>
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                  <div>
                    <div className="case_query_reject_btn_main_flex">
                      <div>
                        <div className="case_detail_single_detail">
                          <h2>You are looking for *</h2>
                          <p>{singleCase?.type_of_loan}</p>
                        </div>
                        <div className="case_detail_single_detail">
                          <h2>How much loan you need (in INR)?</h2>
                          <p>{singleCase?.requirement}</p>
                        </div>
                      </div>

                      {/* <div className="case_query_reject_btn">
                        <Link to="/add-query">Query</Link>
                        <Link >Reject</Link>
                        <Link onClick={CaseRejectStatus}>Reject</Link>

                      </div> */}
                      <div class="case_query_reject_btn Raise_Query_btn_gap">
                      {/* <Link to="#">Edit</Link> */}
                      <Link to="#" class="Raise_Query_btn">Raise Query</Link>
                      </div>
                    </div>
                    <div className="Loan_Approved_Status_main">
                      <div className="">
                        <p>Loan Approved Status: </p>
                        <div className="Loan_Approved_Status">
                          <div className="loan_status_label">
                            <input
                              type="radio"
                              id="Approved"
                              name="loan-status"
                              value="Approved"
                              checked={selectedOption === "Approved"}
                              onChange={handleOptionChange}
                            />
                            <label for="Approved">Approved</label> {' '}
                          </div>
                          <div className="loan_status_label">
                            <input
                              type="radio"
                              id="Declined"
                              name="loan-status"
                              value="Declined"
                              checked={selectedOption === "Declined"}
                              onChange={handleOptionChange}
                            />
                            <label for="Declined">Declined</label>
                          </div>
                        </div>
                      </div>
                    </div>


                    {/*========== case cencel reasons=========== */}
                    {selectedOption === "Declined" && (
                      <>
                        <div className="rejection_reason_main">
                          <button
                            onClick={() => handleReasonClick("Incomplete data")}
                            className={selectedReason === "Incomplete data" ? "active" : ""}
                          >
                            Incomplete data
                          </button>
                          <button
                            onClick={() => handleReasonClick("Low CIBIL")}
                            className={selectedReason === "Low CIBIL" ? "active" : ""}
                          >
                            Low CIBIL
                          </button>
                          <button
                            onClick={() => handleReasonClick("High Leverage")}
                            className={selectedReason === "High Leverage" ? "active" : ""}
                          >
                            High Leverage
                          </button>
                          <button
                            onClick={() => handleReasonClick("Low Runway")}
                            className={selectedReason === "Low Runway" ? "active" : ""}
                          >
                            Low Runway
                          </button>
                        </div>
                        <div className="leder_description width_90">
                          <textarea
                            rows="3"
                            cols="50"
                            className="form_input_box Enter_Comment"
                            placeholder="Enter other Comment"
                          ></textarea>
                        </div>
                      </>
                    )}

                    {ReasonerrorMessage && (
                      <div className='mb-3 error_msg same_line_error_msg'>
                        {ReasonerrorMessage}
                      </div>
                    )}




                    <div className="loan_approve_message_btn loan_approve_message_btn_mobile">
                      <div className="login_register_btn_div">
                        <Link
                          className="blue_btn login_register_btn"
                        // onClick={caseApprovedStatus}


                        >
                          Approve
                        </Link>
                        <Link
                          to="/chat"

                          className="login_register_btn register_btn simple_btn_hover"
                        >
                          Message
                        </Link>
                      </div>
                    </div>

                    {/* forward lender */}
                    {/* {selectedOption === "Approved" && (
                      <>
                        <div className="case_detail_single_detail mt-4 width_80">
                          <h2>Forward to Lender</h2>
                          <form onSubmit={InprogressStatus}>
                            <div className="Forward_Lender_div">
                              <select
                                name="borrower-name"
                                className="form_input_box custom_select"
                                value={lenderId} onChange={handleSelectChange}
                                required
                              >
                                <option value="">Select Lender Name</option>
                                {landernamelist?.map(currEle => {
                                  return (
                                    <>
                                      <option value={currEle?._id}>{currEle?.name} </option>
                                    </>
                                  )
                                })}
                              </select>

                              <button type='submit' className="add_more_btn" onClick={AssignLender}>Add </button>
                            </div>
                          </form>
                        </div>
                       

                      </>
                    )} */}




                    <div className="loan_approve_message_btn loan_approve_message_btn_dektop">
                      <div className="login_register_btn_div">

                        {/* <div className="submit_button_main">
                          {selectedOption === "Approved" ? (
                            <button className='blue_btn login_register_btn' onClick={caseApprovedStatus}> Approved</button>
                          ) : (
                            <button className='blue_btn login_register_btn' style={{ background: "#f76157" }} onClick={CaseRejectStatus}> Declined</button>
                          )}
                        </div> */}



                        {/* <Link
                          className="blue_btn login_register_btn"
                          onClick={caseApprovedStatus}
                        >
                          Approve
                        </Link> */}
                        {/* <Link
                          to="/chat"
                          className="login_register_btn register_btn simple_btn_hover"
                        >
                          Message
                        </Link> */}
                        <div className="submit_button_main">
                          {selectedOption === "Approved" ? (
                            <button className='blue_btn login_register_btn' onClick={caseApprovedStatus}> Approved</button>
                          ) : (
                            <button className='blue_btn login_register_btn' style={{ background: "#f76157" }} onClick={CaseRejectStatus}> Declined</button>
                          )}
                        </div>
                      </div>
                    </div>





                  </div>
                </div>
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 profile_details_main_section">
                  <h3>
                    Financial Details <span> (Upload when month change)</span>{' '}
                  </h3>
                  <div>
                    <div className="finanicial_details_single">
                      <div className="upload-btn-wrapper">
                        <button className="file_upload_btn form_input_box">
                          <span>
                            {' '}
                            Download Audited Financial statements for last 3 years
                          </span>
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                        </button>
                        <input type="file" className="form_input_box" />
                      </div>
                      <div className='Incomplete_complete_status'>
                        <button
                          onClick={handleClickAuditedCheck}
                          disabled={AuditedCheckActive}
                          style={{ opacity: AuditedCheckActive ? 1 : 0.4 }}
                        >
                          <img src={right} alt='cross' className='img-fluid' />
                        </button>
                        <button
                          onClick={handleClickAuditedCross}
                          disabled={AuditedcrossActive}
                          style={{ opacity: AuditedcrossActive ? 1 : 0.4 }}
                        >
                          <img src={cross} alt='cross' className='img-fluid' />
                        </button>
                      </div>
                    </div>

                    <div className="finanicial_details_single">
                      <div className="upload-btn-wrapper">
                        <button className="file_upload_btn form_input_box">
                          <span> Download GST Filing for last 12 months</span>
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                        </button>
                        <input type="file" className="form_input_box" />
                      </div>
                      <div className='Incomplete_complete_status'>
                        <button
                          onClick={handleClickGSTCheck}
                          disabled={GSTCheckActive}
                          style={{ opacity: GSTCheckActive ? 1 : 0.4 }}
                        >
                          <img src={right} alt='cross' className='img-fluid' />
                        </button>
                        <button
                          onClick={handleClickGSTCross}
                          disabled={GSTcrossActive}
                          style={{ opacity: GSTcrossActive ? 1 : 0.4 }}
                        >
                          <img src={cross} alt='cross' className='img-fluid' />
                        </button>
                      </div>
                    </div>

                    <div className="finanicial_details_single">
                      <div className="upload-btn-wrapper">
                        <button className="file_upload_btn form_input_box">
                          <span> Download Bank Statement of last 12 months</span>
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                        </button>
                        <input type="file" className="form_input_box" />
                      </div>
                      <div className='Incomplete_complete_status'>
                        <button
                          onClick={handleClickBankCheck}
                          disabled={BankCheckActive}
                          style={{ opacity: BankCheckActive ? 1 : 0.4 }}
                        >
                          <img src={right} alt='cross' className='img-fluid' />
                        </button>
                        <button
                          onClick={handleClickBankCross}
                          disabled={BankcrossActive}
                          style={{ opacity: BankcrossActive ? 1 : 0.4 }}
                        >
                          <img src={cross} alt='cross' className='img-fluid' />
                        </button>
                      </div>
                    </div>

                    <div className="finanicial_details_single">
                      <div className="upload-btn-wrapper">
                        <button className="file_upload_btn form_input_box">
                          <span>
                            {' '}
                            Download provisional balance sheet for the current
                            year
                          </span>
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                        </button>
                        <input type="file" className="form_input_box" />
                      </div>
                      <div className='Incomplete_complete_status'>
                        <button
                          onClick={handleClickProvisionalCheck}
                          disabled={ProvisionalCheckActive}
                          style={{ opacity: ProvisionalCheckActive ? 1 : 0.4 }}
                        >
                          <img src={right} alt='cross' className='img-fluid' />
                        </button>
                        <button
                          onClick={handleClickProvisionalCross}
                          disabled={ProvisionalcrossActive}
                          style={{ opacity: ProvisionalcrossActive ? 1 : 0.4 }}
                        >
                          <img src={cross} alt='cross' className='img-fluid' />
                        </button>
                      </div>
                    </div>

                    <div className="finanicial_details_single">
                      <div className="upload-btn-wrapper">
                        <button className="file_upload_btn form_input_box">
                          <span>
                            Download ITR acknowledgement form for last 2 years
                          </span>
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                        </button>
                        <input type="file" className="form_input_box" />
                      </div>
                      <div className='Incomplete_complete_status'>
                        <button
                          onClick={handleClickITRCheck}
                          disabled={ITRCheckActive}
                          style={{ opacity: ITRCheckActive ? 1 : 0.4 }}
                        >
                          <img src={right} alt='cross' className='img-fluid' />
                        </button>
                        <button
                          onClick={handleClickITRCross}
                          disabled={ITRcrossActive}
                          style={{ opacity: ITRcrossActive ? 1 : 0.4 }}
                        >
                          <img src={cross} alt='cross' className='img-fluid' />
                        </button>
                      </div>
                    </div>

                    <div className="finanicial_details_single">
                      <div className="upload-btn-wrapper">
                        <button className="file_upload_btn form_input_box">
                          <span>
                            {' '}
                            Download Debt serviced during the current FY
                            (Principal + interest repayment during the year)
                          </span>
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                        </button>
                        <input type="file" className="form_input_box" />
                      </div>
                      <div className='Incomplete_complete_status'>
                        <button
                          onClick={handleClickDebetCheck}
                          disabled={DebetCheckActive}
                          style={{ opacity: DebetCheckActive ? 1 : 0.4 }}
                        >
                          <img src={right} alt='cross' className='img-fluid' />
                        </button>
                        <button
                          onClick={handleClickDebetCross}
                          disabled={DebetcrossActive}
                          style={{ opacity: DebetcrossActive ? 1 : 0.4 }}
                        >
                          <img src={cross} alt='cross' className='img-fluid' />
                        </button>
                      </div>

                    </div>

                    <div className="finanicial_details_single">
                      <div className="upload-btn-wrapper">
                        <button className="file_upload_btn form_input_box">
                          <span>Download MIS</span>
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                        </button>
                        <input type="file" className="form_input_box" />
                      </div>


                      <div className='Incomplete_complete_status'>
                        <button
                          onClick={handleClickMISCheck}
                          disabled={MISCheckActive}
                          style={{ opacity: MISCheckActive ? 1 : 0.4 }}
                        >
                          <img src={right} alt='cross' className='img-fluid' />
                        </button>
                        <button
                          onClick={handleClickMISCross}
                          disabled={MIScrossActive}
                          style={{ opacity: MIScrossActive ? 1 : 0.4 }}
                        >
                          <img src={cross} alt='cross' className='img-fluid' />
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

export default CaseDetails
