import React from 'react'
import Nav from './Component/Content/content-list'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Page/Home/Home'
import Report from './Component/Report/Report'
import IssueCus from './Component/Page/IssueAddingCus/IssueCus'
import IssueInter from './Component/Page/IssueAddingInter/IssueInter'
import CaseView from './Component/Page/CaseView/CaseView'
import MainDash from './Component/Page/DashBoard/MainDash'
import { useEffect, useState } from 'react'



function App() {

  return (
    <main>
      <Nav />
      <div className='w-100'>
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<MainDash />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/issueCus' element={<IssueCus />} />
          <Route path='/issueInter' element={<IssueInter />} />
          <Route path='/report' element={<Report />} />
          <Route path='/report/Detail' element={<CaseView />} />
        </Routes>
      </div>      
    </main>
  )
}

export default App
