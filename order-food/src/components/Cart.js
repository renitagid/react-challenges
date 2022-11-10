import React from 'react'

const Cart = (props) => {
  return (
    <div style={{margin: 20, borderStyle: "solid", padding: 20, borderRadius: "3rem"}}>
      <h1>Cart</h1>
    <div>Your items:
      <div>{props.cart.map((item, index)=>{
        return <p>{index+1} {item}</p>
      })}</div></div>
    <div>Your total cost: {props.cost}</div>
    </div>
  )
}

export default Cart