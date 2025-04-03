import React from 'react';
import '../styles/Navbar.css'
import '../App.css'

function Navbar({itemCount, totalPrice, confirm}) {
  return (
        <div
        style={{
            backgroundColor: 'rgb(250, 217, 111)',
            width: '100vw',
            height: '50px',
            position: 'absolute',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
        }}
        >
        <div class = "left">Sigma Foods</div>
        <div class = "right">Cart: {itemCount} items | ₹{totalPrice}</div>
        <button class = "confirm" 
        onClick={confirm}>Confirm Order</button>
        </div>
  );
}

export default Navbar;
