import React from "react";
import { Link } from "react-router-dom";
import './Cart.css'
const CartItemCard = ({ item,deleteCartItems}) => {
  const signInLinkStyle={
  
    height:'10rem',
    width:'10rem',
    borderRadius:'999px',
    margin:'20px 0 0 100px '
    }
  return (
    <div className="CartItemCard">
      <img src={item.image} id="image" style={signInLinkStyle} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;