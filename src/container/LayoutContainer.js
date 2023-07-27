import React from 'react'
import './LayoutStyle.css'
import HeaderComp from '../components/HeaderComp/HeaderComp'
import NavLeftComp from '../components/NavLeftComp/NavLeftComp'
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const LayoutContainer = () => {
  return (
    <div className='layoutContainer'>
        <div className='layoutPartTop'>
            <HeaderComp />
        </div>
       <div className='layoutPartBot'>
        <div className='layoutPartLeft'>
            <NavLeftComp />
        </div>
        <div className='layoutPartGeneral'>
        <HomeScreen />

        </div>
       </div>
    </div>
  )
}

export default LayoutContainer