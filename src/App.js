import React from 'react';
import './App.css';
import CouponSlide from './components/CouponSlide';
import Item from './components/Item';
import Navbar from './components/Navbar';
import burgerOrder from './images/burgerOrder.jpg';
import pizzaOrder from './images/pizzaOrder.jpg';
import tendyOrder from './images/tendyOrder.jpg';

const data = [
  {
    title: "Burger",
    path: burgerOrder,
    description: "A juicy grilled patty with fresh veggies and melted cheese on a soft brioche bun.",

    price: "₹300",
  },
  {
    title: "Pizza",
    path: pizzaOrder,
    description: "A crispy hand-tossed crust with rich tomato sauce, mozzarella, and spicy pepperoni",
    price: "₹500",
  },
  {
    title: "Tendies",
    path: tendyOrder,
    description: "Crunchy golden-brown chicken tenders served with honey mustard and waffle fries.",
    price: "₹150",
  },
];

function App() {
  return (
    <div style = {{backgroundColor: 'rgba(0,0,0,0.9)'}}>
      <Navbar itemCount = {'0'}/>
      <CouponSlide />
      <div style = {{color: 'white', paddingTop: '20px', paddingLeft: '42vw', fontSize: '30px', fontWeight: 'bold'}}>AVAILABLE ITEMS</div>
      <div style={{display:'flex', gap: '30px', padding: '30px' }}>
        {data.map((item, index) => (
          <Item
            key={index}
            path={item.path}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
