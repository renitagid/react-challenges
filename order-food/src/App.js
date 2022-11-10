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
    <div style={{margin: 20, padding: 20, borderStyle: "solid", borderRadius: "3rem"}}>
      <h1>Menu</h1>
      <h2>Entrees</h2>
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
      <h2>Sides</h2>
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
      <h2>Desserts</h2>
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
      <Cart cart={cart} cost={cost} />
    </div>
  );
}

export default App;
