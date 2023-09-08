import React,{useState,useEffect} from 'react'
import search from '../assets/imgs/icosn/search.svg'
import msg from '../assets/imgs/icosn/msg.svg'
import notification from '../assets/imgs/icosn/Notfication.svg'
import userProfile from '../assets/imgs/icosn/user.png'

import { Link,NavLink } from 'react-router-dom'

const Header = () => {

    // ============state for form============
    const [profileData, setprofileData] = useState(null)
    const userToken = localStorage.getItem('lenderuserid')
    // ============Profile API============
    const profileAPI = () => {
  
  
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
  
      var raw = JSON.stringify({
        userId: userToken
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
      console.log('profileData:---', profileData)
    }, [])
  
  
  
    // ============Read Notification API============
  
    const ReadNotification = () => {
  
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
      fetch(`https://bizfinn.onrender.com/readNotification/${userToken}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
        })
        .catch(error => console.log('error', error));
    }

  return (
    <>
      <section className='header_main_div'>
        <div className='header_search_box'>
          <img src={search} alt='search' className='img-fluid' />{' '}
          <input type='search' placeholder='Search for the Deals' />
        </div>
        <div className='header_right_side_div'>
      

          <nav className='header_right_side_div_nav'>
            <div className="border_right">

              <NavLink
                exact
                to="/lender-chat"
                className="header_right_side_div_nav_link"

                activeClassName="active_link"
              >
                <img src={msg} alt="search" className="img-fluid" />{' '}
              </NavLink>
            </div>
            <div className="border_right ">
              <NavLink
                exact
                to="/lender_notification"
                // onClick={ReadNotification}
                className="header_right_side_div_nav_link header_pos_rel"
                activeClassName="active_link"
              >
                <img src={notification} alt="search" className="img-fluid" />{' '}
                {/* <span className='header_badge'> {count > 0 && <span className="badge">{count}</span>}</span> */}
                <span className='header_badge'> 5</span>
          
              </NavLink>
            </div>

            <div className="header_profile_btn">
            {/* <Link to="/lender_profile" className="">
                <img src={
                  profileData &&
                  profileData?.data[0] &&
                  profileData?.data[0].avatar
                } alt="" className="img-fluid" />{' '}
                <span>{profileData &&
                  profileData?.data[0] &&
                  profileData?.data[0].name}</span>
              </Link> */}
            </div>
          </nav>

        </div>
      </section>
    </>
  )
}

export default Header
