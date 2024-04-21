import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'

function Explore({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Choose From The Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a detactable array of dishes crafted with finest ingredients and culinary expertise.Our mission is satisfy your cravings and elevate Your experience of street food.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}  key={index} className="Explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='no img'/>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Explore
