import React, { useState, useEffect } from 'react'
import LenderDashboardMain from './LenderDashboardMain'
import upload from '../assets/imgs/icosn/upload.svg'
import { Link, useParams, useNavigate } from 'react-router-dom'
// import BackBtn from '../admin/BackBtn'
import { BiEdit } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BorrowerProfile = () => {
  const navigate = useNavigate();
  const { _id } = useParams()

  const [borrowerData, setBorrowerData] = useState({})
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [password, setPassword] = useState()

  // file upload
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

  const [PEN, setPEN] = useState(null)
  const [aadhar, setaadhar] = useState(null)



  const handleFileChange = (event, setterFunction) => {
    const selectedFile = event.target.files[0]
    setterFunction(selectedFile)
  }

  // profile upload
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(file)
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }


  // ==========form state for business details==============
  const [businessDetailsData, setBusinessDetailsData] = useState({})

  const [register_company_name, setregister_company_name] = useState('')
  const [bussiness_structure, setbussiness_structure] = useState('')
  const [age_og_business, setage_og_business] = useState('')
  const [type_of_business, settype_of_business] = useState('')
  const [annual_turn_over, setannual_turn_over] = useState('')
  const [type_of_loan, settype_of_loan] = useState('')
  const [loan_amount, setloan_amount] = useState('')

  let BusinessDetailsiItems = [register_company_name, bussiness_structure, age_og_business, type_of_business, annual_turn_over, type_of_loan, loan_amount]





  // =======================================
  // ==========Borrower Profile===========
  // =======================================

  const BorrowerProfile = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      borrowerId: _id
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://bizfinn.onrender.com/getSingleBorrower", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setBorrowerData(result.data)
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    BorrowerProfile()
  }, [_id])

  // =======================================
  // ============profile Update API=========
  // =======================================

  const LenderProfileUPdate = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "password": password,
      "name": name,
      "mobile": mobile,
      "email": email
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://bizfinn.onrender.com/updateProfile/${_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.message) {
          toast.success(result.message, {
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
  // ==========Business Details API===========
  // =======================================

  const BusinessDetailsAPI = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(BusinessDetailsiItems);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://bizfinn.onrender.com/updateBorrowerBusinessDetails/${_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setBusinessDetailsData(result.data)

        if (result.message) {

          toast.success(result.message, {
            autoClose: 2000
          })
          setTimeout(() => {
            // navigate("/borrower");
          }, 2000)

        }
      })
      .catch(error => console.log('error', error));
  }

  // borrower_Business_Details
  const borrower_Business_Details = (e) => {
    e.preventDefault();

  }
  // useEffect(()=>{
  //   BusinessDetailsAPI()
  //   console.log("business details ",businessDetailsData)
  // },[])

  return (
    <>
      <LenderDashboardMain>
        <div className="">
          <div className="profile_bg_main">
            <section className="side_content_main_box ">
              <div className="page_heading_div">
                <div className="back_btn_filter_main">
                  <div className="back_btn_filter_inner">
                    {/* <BackBtn /> */}
                    <h2>Profile</h2>
                  </div>
                </div>
                <div className="dashboard_add_new_btn ">
                  <div className=" custom_profile_upload_btn">
                    <label htmlFor="profile" className="file_input_button">
                      {selectedImage ? (
                        <div className="file_upload_flex">
                          <BiEdit className="profile_edit_icon" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <img
                            src={upload}
                            alt="upload"
                            className="img-fluid"
                          />
                          <span>Upload Profile Picture</span>
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="profile"
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                    {previewImage && (
                      <img
                        className="profile_img_preview"
                        src={previewImage}
                        alt="Preview"
                      />
                    )}
                  </div>
                </div>
              </div>
              <ToastContainer />

              {/* Personal Details */}
              <section className=" ">
                <div className="Personal_Details_div_main">
                  <h3>Personal Details </h3>
                  <div className="row">
                    <div className="col-xl col-lg-6 col-md-6">
                      <div>
                        <input
                          type="text"
                          className="form_input_box"
                          placeholder="Name"
                          autoCorrect="off"
                          autoComplete="off"
                          value={
                            name ??
                            (borrowerData &&
                              borrowerData?.name)
                          }
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl col-lg-6 col-md-6">
                      <div>
                        <input
                          type="email"
                          className="form_input_box"
                          placeholder="Email"
                          autoCorrect="off"
                          autoComplete="off"
                          value={
                            email ??
                            (borrowerData &&
                              borrowerData?.email)
                          }
                          onChange={e => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-xl col-lg-6 col-md-6">
                      <div>
                        <input
                          type="tel"
                          className="form_input_box"
                          placeholder="Phone Number"
                          autoCorrect="off"
                          autoComplete="off"
                          value={
                            mobile ??
                            (borrowerData &&
                              borrowerData?.mobile)
                          }
                          onChange={e => setMobile(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-xl col-lg-6 col-md-6">
                      <div>
                        <input
                          type="password"
                          className="form_input_box"
                          placeholder="Password"
                          autoCorrect="off"
                          autoComplete="off"
                          value={
                            password ??
                            (borrowerData &&
                              borrowerData?.password)
                          }
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl col-lg-6 col-md-6 ">
                      <div className="Update_Share_Details_btns_div">
                        <Link onClick={LenderProfileUPdate}>Update</Link>
                        <Link to="#">Share Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <section className="profile_details_main_section">
            <div className="row">
              {/* ===========Business Details=========== */}
              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 profile_right_border">
                <form onSubmit={borrower_Business_Details}>
                  <div className='borrower_Profile_m_height'>
                    <h3>Business Details</h3>
                    <div className="">
                      <input
                        type="text"
                        className="form_input_box"
                        placeholder="Name of Registered Company"
                        autoCorrect="off"
                        autoComplete="off"
                        // value={register_company_name}
                        // onChange={e => setregister_company_name(e.target.value)}
                        value={
                          register_company_name ??
                          (businessDetailsData &&
                            businessDetailsData[0] &&
                            businessDetailsData[0]?.register_company_name)
                        }
                        onChange={e => setregister_company_name(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={bussiness_structure}
                        onChange={e => setbussiness_structure(e.target.value)}
                      >
                        <option value="">Type of Business Structure</option>
                        <option value="Business Structure 1">Business Structure 1</option>
                        <option value="Business Structure 2">Business Structure 2</option>
                        <option value="Business Structure 3">Business Structure 3</option>
                      </select>
                    </div>
                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={annual_turn_over}
                        onChange={e => setannual_turn_over(e.target.value)}
                      >
                        <option value="">Annual Turnover of your Business (in INR)</option>
                        <option value="upto 1cr">upto 1 CR</option>
                        <option value="1 - 10 CR">1 - 10 CR</option>
                        <option value="10 - 50 CR">10 - 50 CR</option>
                        <option value="50cr+">50+ CR</option>

                      </select>
                    </div>

                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={age_og_business}
                        onChange={e => setage_og_business(e.target.value)}
                      >
                        <option value="">How Old is your Business</option>
                        <option value="Less than 1 Year Old">Less than 1 Year Old</option>
                        <option value="1 -3 Years Old">1 -3 Years Old</option>
                        <option value="3 Years +">3 Years + </option>
                      </select>
                    </div>

                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={type_of_business}
                        onChange={e => settype_of_business(e.target.value)}
                      >
                        <option value="">Type of Business</option>
                        <option value="proprietorship">proprietorship</option>
                        <option value="Partnership">Partnership</option>
                        <option value="LLP">LLP</option>
                        <option value="OPC">OPC</option>
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="Public Limited Company">Public Limited Company</option>
                      </select>
                    </div>

                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={type_of_loan}
                        onChange={e => settype_of_loan(e.target.value)}
                      >
                        <option value="">Type of Loan</option>
                        <option value="Short Term">Short Term</option>
                        <option value="Long Term">Long Term</option>
                      </select>
                    </div>
                    <div className="">
                      <select
                        name="annual-turn"
                        className="form_input_box custom_select"
                        value={loan_amount}
                        onChange={e => setloan_amount(e.target.value)}
                      >
                        <option value="">Loan Amount</option>
                        <option value="1cr">1 CR</option>
                        <option value="5cr">5 CR</option>
                        <option value="10cr">10 CR</option>
                      </select>
                    </div>
                  </div>

                  <div className="dashboard_add_new_btn">
                    {/* <Link to="/borrower" className="">
                    Submit
                  </Link> */}
                    <button type='submit' className="">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 profile_right_border">
                <div className="borrower_Profile_m_height">
                  <h3>KYC Details </h3>

                  {/* proprietorship PEN card */}
                  {/* {type_of_business === 'proprietorship' &&
                    <div className="custom_file_upload_main">
                      <label htmlFor="PEN" className="file-input-button">
                        {PEN ? (
                          <div className="file_upload_flex">
                            <span> {PEN.name}</span>
                            <img src={upload} alt="upload" className="img-fluid" />
                          </div>
                        ) : (
                          <div className="file_upload_flex">
                            <span>PEN Card</span>
                            <img src={upload} alt="upload" className="img-fluid" />
                          </div>
                        )}
                      </label>
                      <input
                        type="file"
                        id="PEN"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileChange(e, setPEN)}
                      />
                    </div>
                  } */}

                     {/* proprietorship aadhar card */}
                     {/* {type_of_business === 'proprietorship' &&
                    <div className="custom_file_upload_main">
                      <label htmlFor="aadhar" className="file-input-button">
                        {aadhar ? (
                          <div className="file_upload_flex">
                            <span> {aadhar.name}</span>
                            <img src={upload} alt="upload" className="img-fluid" />
                          </div>
                        ) : (
                          <div className="file_upload_flex">
                            <span>Aadhar Card</span>
                            <img src={upload} alt="upload" className="img-fluid" />
                          </div>
                        )}
                      </label>
                      <input
                        type="file"
                        id="aadhar"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileChange(e, setaadhar)}
                      />
                    </div>
                  } */}




                  {/* AOA */}
                  <div className="custom_file_upload_main">
                    <label htmlFor="AOA" className="file-input-button">
                      {AOA ? (
                        <div className="file_upload_flex">
                          <span> {AOA.name}</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <span> Upload AOA</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="AOA"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileChange(e, setAOA)}
                    />
                  </div>

                  {/* MOA */}
                  <div className="custom_file_upload_main">
                    <label htmlFor="MOA" className="file-input-button">
                      {MOA ? (
                        <div className="file_upload_flex">
                          <span> {MOA.name}</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <span> Upload MOA</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="MOA"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileChange(e, setMOA)}
                    />
                  </div>

                  {/* COI */}
                  <div className="custom_file_upload_main">
                    <label htmlFor="COI" className="file-input-button">
                      {COI ? (
                        <div className="file_upload_flex">
                          <span> {COI.name}</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <span> Upload COI - Certificate of Incorporation</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="COI"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileChange(e, setCOI)}
                    />
                  </div>

                  {/* GST */}
                  <div className="custom_file_upload_main">
                    <label htmlFor="GST" className="file-input-button">
                      {GST ? (
                        <div className="file_upload_flex">
                          <span> {GST.name}</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <span> Upload GST Certificate</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="GST"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileChange(e, setGST)}
                    />
                  </div>

                  {/* Directors */}
                  <div className="custom_file_upload_main">
                    <label htmlFor="Directors" className="file-input-button">
                      {Directors ? (
                        <div className="file_upload_flex">
                          <span> {Directors.name}</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <span>List of Directors</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="Directors"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileChange(e, setDirectors)}
                    />
                  </div>

                  {/* PAN */}
                  <div className="custom_file_upload_main">
                    <label htmlFor="PAN" className="file-input-button">
                      {PAN ? (
                        <div className="file_upload_flex">
                          <span> {PAN.name}</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <span>Upload Company PAN Certificate</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="PAN"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileChange(e, setPAN)}
                    />
                  </div>

                  {/* KYCDirectors */}
                  <div className="custom_file_upload_main">
                    <label htmlFor="KYCDirectors" className="file-input-button">
                      {KYCDirectors ? (
                        <div className="file_upload_flex">
                          <span> {KYCDirectors.name}</span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      ) : (
                        <div className="file_upload_flex">
                          <span>
                            Upload KYC (PAN and Aadhaar) all the directors
                          </span>
                          <img src={upload} alt="upload" className="img-fluid" />
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="KYCDirectors"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileChange(e, setKYCDirectors)}
                    />
                  </div>
                </div>
                <div className="dashboard_add_new_btn">
                  <Link to="/borrower" className="">
                    Submit
                  </Link>
                </div>
              </div>

              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 profile_right_border">
                <div className="borrower_Profile_m_height">
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
                </div>
                <div className="dashboard_add_new_btn">
                  <Link to="/borrower" className="">
                    Submit
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LenderDashboardMain>
    </>
  )
}

export default BorrowerProfile
