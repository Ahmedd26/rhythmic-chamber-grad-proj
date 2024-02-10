import React from "react";
import "./cartSummaryBox.scss";
import CartSummaryCard from "../CartSummaryCard";
const CartSummaryBox = ({ cartItems, onPaymentOpen }) => {
  const totalPrice = cartItems.reduce((accumulator, data) => {
    return accumulator + parseFloat(data.productPrice);
  }, 0);
  return (
    <div className="cartRightContainer">
      <div className="carSummaryTop">
        <h1 className="cartSummaryHeading">Cart Summary</h1>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="cartSummaryCards">
        {cartItems.map((data, index) => (
          <CartSummaryCard
            key={index}
            userAvatar={data.userAvatar}
            username={data.username}
            price={data.productPrice}
          />
        ))}
      </div>
      <div className="cartSummaryCalc">
        <div className="cartCalcItem">
          <p className="subSummary">Total Gross</p>
          <p className="subSummaryPrice">{totalPrice} EGP</p>
        </div>
        <div className="cartCalcItem">
          <p className="subSummary">Discount</p>
          <p className="subSummaryPrice">-0 EGP</p>
        </div>
        <div className="cartCalcItem">
          <p className="totalSummary">Total</p>
          <p className="totalSummaryPrice">{totalPrice} EGP</p>
        </div>
      </div>
      <button className="cartSummaryPayment" onClick={onPaymentOpen}>
        Payment & Checkout
      </button>
    </div>
  );
};

export default CartSummaryBox;
