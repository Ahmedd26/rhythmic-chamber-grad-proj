import React from "react";
import "./cartItem.scss";
const CartItem = ({ cartItem, onRemove }) => {
  const handleRemove = () => {
    onRemove(cartItem); // Pass the cartItem object to the parent component
  };
  return (
    <div className="cartItem">
      <div className="cartItemHeading">
        <div className="cartItemHeadingLeft">
          <img
            src={cartItem.userAvatar}
            alt="userAvatar"
            className="cartItemHeadingLeftImage"
          />
          <h1 className="cartItemHeadingLeftName">{cartItem.username}</h1>
        </div>
        <button className="cartItemHeadingRight" onClick={handleRemove}>
          <i class="fa-regular fa-trash-can deleteIco"></i>
          <span className="remover">Remove</span>
        </button>
      </div>
      <div className="cartItemDetails">
        <div className="cartColumn">
          <div className="cartColumnLeft">
            <div className="cartDetailProductImage">
              <img src={cartItem.productImage} alt="Artwork" />
            </div>
            <div className="cartItemNameAndType">
              <span className="cartItemTitle">Item</span>
              <h3 className="cartItemProductName">{cartItem.productTitle}</h3>
              <p className="cartItemProductType">{cartItem.productType}</p>
            </div>
          </div>
        </div>
        <div className="cartColumn">
          <div className="cartColumnRight">
            <span className="cartItemPriceHeader">Price</span>
            <span className="cartItemPrice">{cartItem.productPrice} EGP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
