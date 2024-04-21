import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../Context/ShowContext';

const FoodItem = ({id,name,price,description,image}) => {

  // const [itemCount,setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id]
          ?<img className='add' onClick={() => addToCart(id) }  src={assets.add_icon} alt=''/>
          :<div className='food-item-counter'>
            <img onClick={()=> removeFromCart(id)}  src={assets.remove_icon}  alt=''/>
            <p>{cartItems[id]}</p>
            <img onClick={()=> addToCart(id)}  src={assets.add_icon_g} alt=''/>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating} alt="" />
        </div>
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  )
}

export default FoodItem;
