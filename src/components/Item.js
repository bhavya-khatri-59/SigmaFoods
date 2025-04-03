import React from 'react';

function Item({ path, title, price, description }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: '300px',
      width: '95vw',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: '5px',
      paddingBottom: '5px',
      backgroundColor: '#333',
      borderRadius: '10px',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
      color: 'yellow',
      border: "3px solid yellow",
      transition: 'transform 0.3s ease-in-out',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
    >
      <div 
        style={{
          backgroundImage: `url(${path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          width: '250px',
          borderRadius: '10px',
          marginRight: '15px',
          border: "3px solid white",
          flexShrink: "0",
        }}
      ></div>

      <div>
        <h3 style={{ margin: '5px 0', fontSize: '40px', position: 'relative', top: '-40px'}}>{title}</h3>
        <p style={{ fontSize: '12px', color: 'white' ,position: 'relative', top: '-40px'}}>{description}</p>
        <p style={{ fontWeight: 'bold', color: 'lime', fontSize: '25px' ,position: 'relative', top: '-50px'}}>{price}</p>
      </div>
    </div>
  );
}

export default Item;
