import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {

  const [menu,setMenu] = useState("Home")

  return (
    <div className='navbar'>
      <img src={assets.Logo} alt='no img' className='logo'/>
      <ul className='Navbar-Menu'>
        <li onClick={()=> setMenu('Home')}  className={menu=="Home"?"active":""}>Home</li>
        <li onClick={()=> setMenu('Menu')}  className={menu=="Menu"?"active":""}>Menu</li>
        <li onClick={()=> setMenu('Mobile-App')}  className={menu=="Mobile-App"?"active":""}>Mobile-App</li>
        <li onClick={()=> setMenu('Contact us')}  className={menu=="Contact us"?"active":""}>Contact us</li>
      </ul>
      <div className='Navbar-Right'>
        <img src={assets.Search} alt=''className='icon' />
        <div className="Navbar-Search-Icon">
          <img src={assets.Basket} alt='' className='icon' />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
