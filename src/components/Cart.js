import React from 'react';
import "../App.css";

function Cart() {
  return (
    <div className="cart">
      <p className='text-1'> <strong> My Order </strong></p>
      
      <p>14:30 AM</p>
      <input className='input' type="text" />
      <div className='cartbox'>
        <p> DRAG & DROP</p>
      </div>
    

      <button className='checkout-btn'>Checkout</button>
    </div>
  );
}

export default Cart;
