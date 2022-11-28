import "./App.css";
import Display from "./components/Display.js";
import React, { useState } from "react";
import Cart from "./components/Cart";
import menu from "./components/menu";

function App() {
  let [cart, setCart] = useState([]);
  let [cost, setCost] = useState(0);
  const addToCart = (item) => {
    setCost(cost + item.price);
    setCart([...cart, item.name]);
    return null;
  };
  console.log(cart);
  console.log(cost);

  return (
    <div className="app">
      <h1>Tasty's Cafe</h1>
      <div className="small">
      <h2>Menu</h2>
      <div className="sections">
      <h3>Entrees</h3>
      {menu.mains.map((item, index) => {
        return (
          
          <Display
            name={item.name}
            price={item.price}
            key={index}
            addToCart={addToCart}
          />
        );
      })}
      <h3>Sides</h3>
         {menu.sides.map((item, index) => {
        return (
          <Display
            name={item.name}
            price={item.price}
            key={index}
            addToCart={addToCart}
          />
        );
      })}
      <h3>Desserts</h3>
         {menu.desserts.map((item, index) => {
        return (
          <Display
            name={item.name}
            price={item.price}
            key={index}
            addToCart={addToCart}
          />
        );
      })}
      </div>
      <Cart cart={cart} cost={cost} />
      </div>
    </div>
  );
}

export default App;
