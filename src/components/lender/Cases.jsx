// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import LenderDashboardMain from '../lender/LenderDashboardMain'
// import { Link } from 'react-router-dom'
// import Tab from 'react-bootstrap/Tab'
// import Tabs from 'react-bootstrap/Tabs'
// import Filter from '../admin/Filter'
// import BackBtn from '../admin/BackBtn'
// const Cases = () => {
//   const navigate = useNavigate()

//   function navigateDetailPage (event) {
//     navigate('/lender_cases_details')
//   }
//   return (
//     <>
//       <LenderDashboardMain>
//         <section className='side_content_main_box'>
//           <div className='page_heading_div'>
//             <div className='back_btn_filter_main'>
//               <div className='back_btn_filter_inner'>
//                 <BackBtn />
//                 <h2>Cases</h2>
//               </div>
//               <Filter />
//             </div>
//             <div className='dashboard_add_new_btn'>
//               <Link className='' to='#'>
//                 Add Case
//               </Link>
//             </div>
//           </div>

//           <section className='tabs_main_section commaon_tabs_main_section'>
//             <Tabs
//               defaultActiveKey='ReceivedList'
//               id='uncontrolled-tab-example'
//               className='commaon_tabs_main'
//             >
//               <Tab eventKey='ReceivedList' title='List of Received'>
//                 <section className='table_main_section'>
//                   <div className='table-responsive'>
//                     <table className='table   commaon_table'>
//                       <thead className='table_head'>
//                         <tr>
//                           <th scope='col'>Case No</th>
//                           <th scope='col'>Date</th>
//                           <th scope='col'>Borrower Name</th>
//                           <th scope='col'>Business Structure</th>
//                           <th scope='col'>Turnover</th>
//                           <th scope='col'>Industry</th>
//                           <th scope='col'>Status</th>
//                           <th scope='col'>Loan Ask</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Pending</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Pending</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Pending</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Pending</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </section>
//               </Tab>
//               <Tab eventKey='ApprovedList' title='List of Approved'>
//                 <section className='table_main_section'>
//                   <div className='table-responsive'>
//                     <table className='table   commaon_table'>
//                       <thead className='table_head'>
//                         <tr>
//                           <th scope='col'>Case No</th>
//                           <th scope='col'>Date</th>
//                           <th scope='col'>Borrower Name</th>
//                           <th scope='col'>Business Structure</th>
//                           <th scope='col'>Turnover</th>
//                           <th scope='col'>Industry</th>
//                           <th scope='col'>Status</th>
//                           <th scope='col'>Loan Ask</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_approved_btn'>
//                               {' '}
//                               Approved
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_approved_btn'>
//                               {' '}
//                               Approved
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_approved_btn'>
//                               {' '}
//                               Approved
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_approved_btn'>
//                               {' '}
//                               Approved
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </section>
//               </Tab>
//               <Tab eventKey='RejectedList' title='List of Rejected'>
//                 <section className='table_main_section'>
//                   <div className='table-responsive'>
//                     <table className='table   commaon_table'>
//                       <thead className='table_head'>
//                         <tr>
//                           <th scope='col'>Case No</th>
//                           <th scope='col'>Date</th>
//                           <th scope='col'>Borrower Name</th>
//                           <th scope='col'>Business Structure</th>
//                           <th scope='col'>Turnover</th>
//                           <th scope='col'>Industry</th>
//                           <th scope='col'>Status</th>
//                           <th scope='col'>Loan Ask</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Rejected</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Rejected</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Rejected</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn'> Rejected</span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </section>
//               </Tab>
//               <Tab eventKey='ProgressList' title='List of In Progress'>
//                 <section className='table_main_section'>
//                   <div className='table-responsive'>
//                     <table className='table   commaon_table'>
//                       <thead className='table_head'>
//                         <tr>
//                           <th scope='col'>Case No</th>
//                           <th scope='col'>Date</th>
//                           <th scope='col'>Borrower Name</th>
//                           <th scope='col'>Business Structure</th>
//                           <th scope='col'>Turnover</th>
//                           <th scope='col'>Industry</th>
//                           <th scope='col'>Status</th>
//                           <th scope='col'>Loan Ask</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_progress_btn'>
//                               {' '}
//                               Progress
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_progress_btn'>
//                               {' '}
//                               Progress
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_progress_btn'>
//                               {' '}
//                               Progress
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>

//                         <tr>
//                           <td className='name'>
//                             <Link to='/lender_cases_details'> 110030 </Link>
//                           </td>
//                           <td>11/11/2021</td>
//                           <td className='name'>
//                             <Link to='#'> Sanjeev Mehta </Link>
//                           </td>
//                           <td>Private Ltd</td>
//                           <td>1 Cr</td>
//                           <td>Automobile</td>
//                           <td>
//                             <span className='table_pending_btn table_progress_btn'>
//                               {' '}
//                               Progress
//                             </span>
//                           </td>
//                           <td>1 Cr</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </section>
//               </Tab>
//             </Tabs>
//           </section>
//         </section>
//       </LenderDashboardMain>
//     </>
//   )
// }

// export default Cases




import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


// import BackBtn from '../admin/BackBtn'
// import Loader from '../admin/Loader'



import LenderDashboardMain from '../lender/LenderDashboardMain'
import { Link } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
// import Filter from '../admin/Filter'

const Cases = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [listOfcases, setListOfCases] = useState([])


  const ListOfCases = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://bizfinn.onrender.com/getCases", requestOptions)
      .then(response => response.json())
      .then(result =>{ console.log(result)
        setListOfCases(result.data)})
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    ListOfCases()
  }, []);



  return (
    <>
      <LenderDashboardMain>
        <section className="side_content_main_box">
          <div className="page_heading_div">
            <div className="back_btn_filter_main">
              <div className="back_btn_filter_inner">
                {/* <BackBtn /> */}
                <h2>Cases</h2>
              </div>
              {/* <Filter /> */}
            </div>
            <div className="dashboard_add_new_btn">
              <Link className="" to="/lender_add_cases">
                Add Cases
              </Link>
            </div>
          </div>

          <section className="tabs_main_section commaon_tabs_main_section">
            <Tabs
              defaultActiveKey="ReceivedList"
              id="uncontrolled-tab-example"
              className="commaon_tabs_main"
            >
              <Tab eventKey="ReceivedList" title="List of Received">
                <section className="table_main_section">
                  <div className="table-responsive">
                    <table className="table   commaon_table">
                      <thead className="table_head">
                        <tr>
                          <th scope="col">Case No</th>
                          <th scope="col">Borrower Name</th>
                          <th scope="col">Type of Loan</th>
                          <th scope="col">Turnover</th>
                          <th scope="col">Loan Ask</th>
                          <th scope="col">Status</th>
                          <th scope="col">Select Lender</th>
                          <th scope="col">Lender Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading && (
                          <div className='pos_abs'>
                           {/* <Loader/> */}
                          </div>
                        )}
                        {listOfcases
                          ?.filter(currEle => currEle?.status === 0)
                          .slice()
                          .reverse()
                          .map(currEle => {
                            return (
                              <>
                                <tr key={currEle?._id}>
                                  <td className="name">
                                    <Link to={`/lender_cases_details/${currEle?._id}`}> {currEle?.case_no} </Link>
                                  </td>
                                  <td className="name">
                                    <Link to={`/borrower__profile/${currEle?.borrower?._id}`}> {currEle?.borrower?.name} </Link>
                                  </td>
                                  <td>{currEle?.type_of_loan}</td>
                                  <td>1 Cr</td>
                                  <td>{currEle?.requirement} </td>
                                  <td>
                                    <span className="table_pending_btn"> Pending</span>
                                  </td>
                                  <td>{currEle?.lender}</td>
                                  <td>{currEle?.lender_remark}</td>
                                </tr>
                              </>
                            )
                          })}

                      </tbody>
                    </table>
                  </div>
                </section>
              </Tab>
              <Tab eventKey="ApprovedList" title="List of Approved">
                <section className="table_main_section">
                  <div className="table-responsive">
                    <table className="table   commaon_table">
                      <thead className="table_head">
                        <tr>
                          <th scope="col">Case No</th>
                          <th scope="col">Borrower Name</th>
                          <th scope="col">Type of Loan</th>
                          <th scope="col">Turnover</th>
                          <th scope="col">Loan Ask</th>
                          <th scope="col">Status</th>
                          <th scope="col">Select Lender</th>
                          <th scope="col">Lender Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading && (
                          <div className='pos_abs'>
                           <Loader/>
                          </div>
                        )}
                        {listOfcases
                          ?.filter(currEle => currEle?.status === 1)
                          .slice()
                          .reverse()
                          .map(currEle => {
                            return (
                              <>
                                <tr key={currEle?._id}>
                                  <td className="name">
                                    <Link to={`/lender_cases_details/${currEle?._id}`}> {currEle?.case_no} </Link>
                                  </td>
                                  <td className="name">
                                    <Link to={`/borrower__profile/${currEle?.borrower?._id}`}> {currEle?.borrower?.name} </Link>
                                  </td>
                                  <td>{currEle?.type_of_loan}</td>
                                  <td>1 Cr</td>
                                  <td>{currEle?.requirement} </td>
                                  <td>
                                    <span className="table_pending_btn table_approved_btn">
                                      Approved
                                    </span>
                                  </td>
                                  <td></td>
                                  {/* <td>{currEle?.lender}</td> */}

                                  <td>{currEle?.lender_remark}</td>
                                </tr>
                              </>
                            )
                          })}

                      </tbody>
                    </table>
                  </div>
                </section>
              </Tab>
              <Tab eventKey="RejectedList" title="List of Rejected">
                <section className="table_main_section">
                  <div className="table-responsive">
                    <table className="table   commaon_table">
                      <thead className="table_head">
                        <tr>
                          <th scope="col">Case No</th>
                          <th scope="col">Borrower Name</th>
                          <th scope="col">Type of Loan</th>
                          <th scope="col">Turnover</th>
                          <th scope="col">Loan Ask</th>
                          <th scope="col">Status</th>
                          <th scope="col">Select Lender</th>
                          <th scope="col">Lender Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading && (
                          <div className='pos_abs'>
                           <Loader/>
                          </div>
                        )}
                        {listOfcases?.filter(currEle => currEle?.status === 3)
                          .slice()
                          .reverse()
                          .map(currEle => {
                            return (
                              <>
                                <tr key={currEle?._id}>
                                  <td className="name">
                                    <Link to={`/lender_cases_details/${currEle?._id}`}> {currEle?.case_no} </Link>
                                  </td>
                                  <td className="name">
                                    <Link to={`/borrower__profile/${currEle?.borrower?._id}`}> {currEle?.borrower?.name} </Link>
                                  </td>
                                  <td>{currEle?.type_of_loan}</td>
                                  <td>1 Cr</td>
                                  <td>{currEle?.requirement} </td>
                                  <td>
                                    <span className="table_pending_btn ">
                                      Rejected
                                    </span>
                                  </td>
                                  <td></td>
                                  {/* <td>{currEle?.lender}</td> */}
                                  <td>{currEle?.lender_remark}</td>
                                </tr>
                              </>
                            )
                          })}

                      </tbody>
                    </table>
                  </div>
                </section>
              </Tab>
              <Tab eventKey="ProgressList" title="List of In Progress">
                <section className="table_main_section">
                  <div className="table-responsive">
                    <table className="table   commaon_table">
                      <thead className="table_head">
                        <tr>
                          <th scope="col">Case No</th>
                          <th scope="col">Borrower Name</th>
                          <th scope="col">Type of Loan</th>
                          <th scope="col">Turnover</th>
                          <th scope="col">Loan Ask</th>
                          <th scope="col">Status</th>
                          <th scope="col">Select Lender</th>
                          <th scope="col">Lender Remark</th>
                        </tr>
                      </thead>


                      <tbody>
                        {isLoading && (
                          <div className='pos_abs'>
                           <Loader/>
                          </div>
                        )}
                        {listOfcases?.filter(currEle => currEle?.status === 4)
                          .slice()
                          .reverse()
                          .map(currEle => {
                            return (
                              <>
                                <tr key={currEle?._id}>
                                  <td className="name">
                                    <Link to={`/lender_cases_details/${currEle?._id}`}> {currEle?.case_no} </Link>
                                  </td>
                                  <td className="name">
                                    <Link to={`/borrower__profile/${currEle?.borrower?._id}`}> {currEle?.borrower?.name} </Link>
                                  </td>
                                  <td>{currEle?.type_of_loan}</td>
                                  <td>1 Cr</td>
                                  <td>{currEle?.requirement} </td>
                                  <td>
                                    <span className="table_pending_btn table_progress_btn">
                                      Progress
                                    </span>
                                  </td>
                                  <td></td>
                                  {/* <td>{currEle?.lender}</td> */}
                                  <td>{currEle?.lender_remark}</td>
                                </tr>
                              </>
                            )
                          })}

                      </tbody>

                    </table>
                  </div>
                </section>
              </Tab>
            </Tabs>
          </section>
        </section>
      </LenderDashboardMain>
    </>
  )
}

export default Cases
