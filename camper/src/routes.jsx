import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MotorComponent from './page/motor/motor'
import DocumentsComponent from './page/motor/documents'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/motor" element={<MotorComponent/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent