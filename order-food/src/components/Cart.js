import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart">
        <strong>Your items:</strong>
        <div>
          {props.cart.map((item, index) => {
            return <p>{`${index + 1}. ${item}`}</p>;
          })}
        </div>
        <div>Your total cost: {props.cost}</div>
      </div>
    </div>
  );
};

export default Cart;
