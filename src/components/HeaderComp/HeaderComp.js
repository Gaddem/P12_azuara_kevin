import React from 'react'
import './HeaderStyle.css'
import logo from '../../img/logo.png';

const HeaderComp = () => {
  return (
    <nav className='headerContainer'>
      <img src={logo} alt="Logo" className='elementListHeader logoHeader'/>;
      <div className='elementListHeader'>
        <p >Accueil</p>
      </div>
      <div className='elementListHeader'>
        <p>Profil</p>
      </div>
      <div className='elementListHeader'>
        <p>Réglages</p>
      </div >
      <div className='elementListHeader'>
        <p>Communauté</p>
      </div>
    </nav>
  )
}

export default HeaderComp