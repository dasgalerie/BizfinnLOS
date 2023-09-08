import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import '../src/App.css'
import '../src/components/assets/css/style.css'
import '../src/components/assets/css/responsive.css'
import Main from './components/Main'
// import Profile from './components/admin/Profile'
// import Dashboard from './components/admin/Dashboard'
// import Cases from './components/admin/Cases'
// import Lenders from './components/admin/Lenders'
// import AddNewLender from './components/admin/AddNewLender'
// import Borrower from './components/admin/Borrower'
// import AddNewBorrower from './components/admin/AddNewBorrower'
// import Query from './components/admin/Query'
// import AddNewQuery from './components/admin/AddNewQuery'
// import Notifications from './components/admin/Notifications'
// import CaseDetails from './components/admin/CaseDetails'
// import QueryDetails from './components/admin/QueryDetails'
// import BorrowerProfile from './components/admin/BorrowerProfile'
// import LenderProfile from './components/admin/LenderProfile'
// import Register from './components/borrower/login/Register'
// import ForgetPassword from './components/admin/login/ForgetPassword.jsx'

// import BorrowerMain from './components/borrower/BorrowerMain'
// import BorrowerDashboard from './components/borrower/BorrowerDashboard'
// import BorrowerProfiles from './components/borrower/BorrowerProfile'
// import BorrowerCases from './components/borrower/Cases'
// import BorroweCaseDetails from './components/borrower/CaseDetails'
// import ApplyNewLoan from './components/borrower/ApplyNewLoan'
// import BorrowerNotifications from './components/borrower/BorrowerNotifications'


// import Chat from './components/admin/Chat/Chat'
// import AddNewCases from './components/admin/AddNewCases'

// lender
import LenderMain from './components/lender/LenderMain'
import LenderDashboard from './components/lender/LenderDashboard'
import LLenderProfile from './components/lender/LenderProfile'
import LenderCases from './components/lender/Cases'
import LenderAddCases from './components/lender/AddNewCases'
import LLenderCasesDetails from './components/lender/CaseDetails'
// import LLenderQuery from './components/lender/Query'
import LLenderQueryDetails from './components/lender/QueryDetails'
import LenderNotifications from './components/lender/LenderNotifications'
import LenderChat from './components/lender/LenderChat/Chat.jsx'
// import BorrowerChat from './components/borrower/BorrowerChat/Chat.jsx'
import LBorrowerProfiles from './components/lender/BorrowerProfile.jsx'

import { useReducer,createContext } from 'react'
import { notifyReducer,initialState } from './components/reducer/notification'
import ProtectedRoute from './components/ProtectedRoute'

    export const globalContext=createContext()
//
function App () {
  const[state,dispatch]=useReducer(notifyReducer,initialState)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const checkUserToken = () => {
    const userToken = localStorage.getItem('userid')
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false)
    }
    setIsLoggedIn(true)
  }
  useEffect(() => {
    checkUserToken()
  }, [isLoggedIn])
  
  return (
    <>
    <globalContext.Provider value={{state,dispatch}}>
      <Routes>
        {/* <Route path='/' element={<Main />} />
        <Route path='register' element={<Register />} />
        <Route path='admin-forget-password' element={<ForgetPassword />} />
        <Route path='admin' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} /> */}
        {/* <Route path='cases' element={<Cases />} />
        <Route path='lenders' element={<Lenders />} />
        <Route path='borrower-profile' element={<BorrowerProfile />} />
        <Route path='borrower-profile/:_id' element={<BorrowerProfile />} />

        <Route path='lender-profile/:_id' element={<LenderProfile />} />
        <Route path='add-lender' element={<AddNewLender />} />
        <Route path='borrower' element={<Borrower />} />
        <Route path='add-borrower' element={<AddNewBorrower />} />
        <Route path='query' element={<Query />} />
        <Route path='notification' element={<Notifications />} />
        <Route path='case-details/:_id' element={<CaseDetails />} />

        <Route path='query-details' element={<QueryDetails />} />
        <Route path='query-details/:_id' element={<QueryDetails />} />
        <Route path='add-query' element={<AddNewQuery />} />
        <Route path='add-case' element={<AddNewCases />} /> */}

        {/* <Route path='chat' element={<Chat />} /> */}
        <Route path='lender-chat' element={<LenderChat />} />
        {/* <Route path='borrower-chat' element={<BorrowerChat />} /> */}


        {/* borrower */}
        {/* <Route path='borrower-login' element={<BorrowerMain />} />
        <Route path='borrower-register' element={<Register />} />
        <Route path='borrower-dashboard' element={<BorrowerDashboard />} />
        <Route path='borrower_profile' element={<BorrowerProfiles />} />
        <Route path='borrower_cases' element={<BorrowerCases />} />
        <Route path='borrower_cases_details' element={<BorroweCaseDetails />} />
        <Route path='apply-new-loan' element={<ApplyNewLoan />} />
        <Route path='borrower_notification' element={<BorrowerNotifications />} /> */}


        {/* lender */}
        <Route path='lender-login' element={<LenderMain />} />
        <Route path='lender-dashboard' element={<LenderDashboard />} />
        <Route path='lender_profile' element={<LLenderProfile />} />
        <Route path='lender_cases' element={<LenderCases />} />
        <Route path='lender_add_cases' element={<LenderAddCases />} />
        <Route path='borrower__profile/:_id' element={<LBorrowerProfiles />} />

        <Route path='lender_cases_details' element={<LLenderCasesDetails />} />
        <Route path='lender_cases_details/:_id' element={<LLenderCasesDetails />} />
        {/* <Route path='lender_query' element={<LLenderQuery />} /> */}
        <Route path='lender_query_details' element={<LLenderQueryDetails />} />
        <Route path='lender_notification' element={<LenderNotifications />} />
      </Routes>
      </globalContext.Provider>
    </>
  )
}
export default App
