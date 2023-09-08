import React, { useState,useEffect } from 'react'
import LenderDashboardMain from '../lender/LenderDashboardMain'
import upload from '../assets/imgs/icosn/upload.svg'
import { Link } from 'react-router-dom'
// import BackBtn from '../admin/BackBtn'
import { BiEdit } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify'

const LenderProfile = () => {
  const handleFileChange = (event, setterFunction) => {
    const selectedFile = event.target.files[0]
    setterFunction(selectedFile)
  }

  // profile upload
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  const handleImageChange = event => {
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


  
  // ============state for form============
  const [profileData, setprofileData] = useState(null)


  // ============Profile API============
  const userId = localStorage.getItem('lenderuserid')
  const profileAPI = () => {

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
      userId: userId
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('https://bizfinn.onrender.com/getProfile', requestOptions)
      .then(response => response.json())
      .then(result => {
        setprofileData(result)
      })
      .catch(error => console.log('error', error))
  }

  // ============Profile API call============
  useEffect(() => {
    profileAPI()
  }, [])

  const DataProfile = profileData?.data
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [password, setPassword] = useState()
  const [avatar, setavatar] = useState()


  // console.log(name)



  // ========update Profile image API================
  const UpdateProfileImageAPI = () => {


    var formdata = new FormData();
    formdata.append("userId", userId);
    formdata.append("image", selectedImage);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://bizfinn.onrender.com/updateProfileImage", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  // ========Admin Profile update API================

  const UpdateProfile = () => {
    console.log('call profile update')

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "password": password,
      "name": name,
      "mobile": mobile
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://bizfinn.onrender.com/updateProfile/${userId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.message) {
          toast.success(result.message, {
            autoClose: 2000
          })
        }
        //  else {
        //   toast.error(result.message, {
        //     autoClose: 2000
        //   })
        // }
        console.log(result)
      })
      .catch(error => console.log('error', error));

  }

  return (
    <>
      <LenderDashboardMain>
        <div className=''>
          <div className='profile_bg_main'>
            <section className='side_content_main_box '>
              <div className='page_heading_div'>
                <div className='back_btn_filter_main'>
                  <div className='back_btn_filter_inner'>
                    {/* <BackBtn /> */}
                    <h2>Profile</h2>
                  </div>
                </div>
                <ToastContainer />

                <div className='dashboard_add_new_btn '>
                  <div className='dashboard_add_new_btn '>
                    <div className=' custom_profile_upload_btn'>
                      <label htmlFor='profile' className='file_input_button'>
                        {selectedImage ? (
                          <div className='file_upload_flex'>
                            <BiEdit className='profile_edit_icon' />
                          </div>
                        ) : (
                          <div className='file_upload_flex'>
                            <img
                              src={upload}
                              alt='upload'
                              className='img-fluid'
                            />
                            <span>Upload Profile Picture</span>
                          </div>
                        )}
                      </label>
                      <input
                        type='file'
                        id='profile'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                      />
                      {previewImage && (
                        <img
                          className='profile_img_preview'
                          src={previewImage}
                          alt='Preview'
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <section className=' '>
                <div className='Personal_Details_div_main'>
                  <h3>Personal Details </h3>
                  <div className='row'>
                    <div className='col-xl col-lg-6 col-md-6'>
                      <div>
                      <input
                            type='text'
                            className='form_input_box'
                            placeholder='Name'
                            autoCorrect='off'
                            autoComplete='off'
                            value={
                              name ??
                              (profileData &&
                                profileData.data[0] &&
                                profileData.data[0].name)
                            }
                            onChange={e => setName(e.target.value)}
                          />
                      </div>
                    </div>
                    <div className='col-xl col-lg-6 col-md-6'>
                      <div>
                      <input readOnly
                            type='email'
                            className='form_input_box'
                            placeholder='Email'
                            autoCorrect='off'
                            autoComplete='off'
                            value={
                              email ??
                              (profileData &&
                                profileData.data[0] &&
                                profileData.data[0].email)
                            }
                            onChange={e => setEmail(e.target.value)}
                          />
                      </div>
                    </div>

                    <div className='col-xl col-lg-6 col-md-6'>
                      <div>
                      <input
                            type='number'
                            className='form_input_box'
                            placeholder='Phone Number'
                            autoCorrect='off'
                            autoComplete='off'
                            value={
                              mobile ??
                              (profileData &&
                                profileData.data[0] &&
                                profileData.data[0].mobile)
                            }
                            onChange={e => setMobile(e.target.value)}
                          />
                      </div>
                    </div>

                    <div className='col-xl col-lg-6 col-md-6'>
                      <div>
                      <input
                            type='password'
                            className='form_input_box'
                            placeholder='Password'
                            autoCorrect='off'
                            autoComplete='off'
                            value={
                              password ??
                              (profileData &&
                                profileData.data[0] &&
                                profileData.data[0].password)
                            }
                            onChange={e => setPassword(e.target.value)}
                          />
                      </div>
                    </div>
                    <div className='col-xl col-lg-6 col-md-6 '>
                      <div className='Update_Share_Details_btns_div'>
                      <Link to='#' onClick={UpdateProfile}>Update</Link>
                        <Link to='#'>Share Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </LenderDashboardMain>
    </>
  )
}

export default LenderProfile
