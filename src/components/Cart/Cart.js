import React from "react";
import './Cart.css';

const Cart = (props) => {
  const cart = props.cart;
  const coursePrice = cart.reduce((total, product) => total + product.price, 0);
  const tax = (coursePrice / 10).toFixed(2);
  const totalPrice = (coursePrice + Number(tax)).toFixed(2);

  return (
    <div className="card col mb-4 position-fixed">
      <div className="card-body">
        <h5 className="card-title text-center "><u>Order Summary</u></h5>
        <p className="card-text">Course Enrolled: {cart.length}</p>
        <p className="card-text">Course Price: ${coursePrice}</p>
        <p className="card-text">Tax + VAT: ${tax}</p>
        <p className="card-text">Total Price: ${totalPrice}</p>


        <a href="#" className="btn btn-success ">
          Submit Order
        </a>
      </div>
    </div>
  );
};

export default Cart;
