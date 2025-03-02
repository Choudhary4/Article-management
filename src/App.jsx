import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import OpenRoute from './components/core/Auth/OpenRoute'
import Signup from './pages/Signup'
import Login from './pages/Login'
import VerifyEmail from './pages/VerifyEmail'
import PrivateRoute from './components/core/Auth/PrivateRoute'
import MyProfile from './components/core/Dashboard/MyProfile'
import Dashboard from './pages/Dashboard'
import Settings from './components/core/Dashboard/Settings'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from "./utils/constant";
import CreateArticle from './components/Article/CreateArticle'
import CreateJournalForm from './components/Article/CreateJournalForm'
import JournalSearch from './components/Article/JournalSearch'
import JournalChart from './components/Article/JournalChart'
import JournalDashboard from './components/Article/JournalDashboard'
import PopUp from './components/Article/PopUp'
import CreateConferenceForm from './components/Article/CreateConferenceForm'
import ConferenceDashboard from './components/Article/ConferenceDashBoard'
import About from './pages/About'
import Contact from './pages/Contact'






function App() {

  const { user } = useSelector((state) => state.profile)
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter" >
     <Navbar/>
     <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path = "signup" element = { 
            <OpenRoute>
            <Signup/>
            </OpenRoute>
            }/> 
           <Route path = "login"
            element = { <OpenRoute>
            <Login/>
            </OpenRoute>
        }/>
        <Route path='/contact' element={<Contact/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/create-article' element={<CreateArticle/>}></Route>
<Route path='/dashboard/create-journal' element={<CreateJournalForm/>}></Route>
<Route path='/search' element={<JournalSearch/>}></Route>
<Route path='/journal-chart' element={<JournalChart/>}></Route>
<Route path='/journal-dashboard' element={<JournalDashboard/>}></Route>
<Route path='/submit' element={<PopUp/>}></Route>
<Route path='/dashboard/create-conference' element={<CreateConferenceForm/>}></Route>
<Route path='/conference-dashboard' element={<ConferenceDashboard/>}></Route>
          <Route path = "verify-email"
            element = { <VerifyEmail/>}
           /> 

<Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
  <Route path="my-profile" element={<MyProfile />} />
  <Route path="settings" element={<Settings />} />

  {user !== null && user.accountType === ACCOUNT_TYPE.STUDENT && (
    <>
      
      
    </>
  )}


</Route>


     </Routes>
    </div>
  )
}

export default App
