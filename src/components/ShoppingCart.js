import { useRef, useState } from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = (props) => {
  return (
    <div className='shoppingCart'>
      🛒
      <div className='shoppingQuantity'>{props.cartItems.length}</div>
    </div>
  );
};

export default ShoppingCart;
