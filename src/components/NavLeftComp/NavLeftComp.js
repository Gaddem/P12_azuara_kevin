import React from 'react'
import './NavLeftStyle.css';
import iconYoga from '../../img/yoga-icon.png'
import iconSwim from '../../img/swim-icon.png'
import iconBike from '../../img/bike-icon.png'
import iconMsc from '../../img/msc-icon.png'


const NavLeftComp = () => {
  return (
    <div className='navLeftContainer'>
     <img src={iconYoga} alt="icone yoga" className='elementListNavLeft'/>
     <img src={iconSwim} alt="icone swim" className='elementListNavLeft'/>
     <img src={iconBike} alt="icone bike" className='elementListNavLeft'/>
     <img src={iconMsc} alt="icone musculutaion" className='elementListNavLeft'/>
    <p className='titleVerticalNavLeft'>Copiryght, SportSee 2020</p>
    </div>
  )
}

export default NavLeftComp