import React from "react";
import "./cartSummaryCard.scss";
const CartSummaryCard = ({ userAvatar, username, price }) => {
  return (
    <div className="cartSummaryCardComponent">
      <div className="cartSummaryCardLeft">
        <img src={userAvatar} alt="user-avatar" />
        <p className="cartSummaryUserName">{username}</p>
      </div>
      <div className="cartSummaryCardRight">{price} EGP</div>
    </div>
  );
};

export default CartSummaryCard;
