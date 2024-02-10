import React, { useState } from "react";
import "./cart.scss";
import userAvatar from "../../assets/images/profile pic (1-1).png";
import productImage from "../../assets/images/BeatImage.png";
import CartSummaryBox from "./cartSummaryCard/cartSummaryBox/CartSummaryBox";
import CartItem from "./cartItem/CartItem";
import PaymentCard from "./cartSummaryCard/paymentCard/PaymentCard";
// import axios from "axios";
const Cart = () => {
  //   const cartItems = [
  //   {
  //     userAvatar: userAvatar,
  //     username: "Mr Beats",
  //     productImage: productImage,
  //     productTitle: "LoveScars",
  //     productType: "Beat",
  //     productPrice: "396",
  //   },
  //   {
  //     userAvatar: userAvatar,
  //     username: "Mr Beats",
  //     productImage: productImage,
  //     productTitle: "LoveScars",
  //     productType: "Beat",
  //     productPrice: "487",
  //   },
  //   {
  //     userAvatar: userAvatar,
  //     username: "Mr Beats",
  //     productImage: productImage,
  //     productTitle: "LoveScars",
  //     productType: "Beat",
  //     productPrice: "45",
  //   },
  // ];
  const [cartItems, setCartItems] = useState([
    {
      userAvatar: userAvatar,
      username: "Mr Beats",
      productImage: productImage,
      productTitle: "LoveScars",
      productType: "Beat",
      productPrice: "396",
    },
    {
      userAvatar: userAvatar,
      username: "Mr Beats",
      productImage: productImage,
      productTitle: "LoveScars",
      productType: "Beat",
      productPrice: "487",
    },
    {
      userAvatar: userAvatar,
      username: "Mr Beats",
      productImage: productImage,
      productTitle: "LoveScars",
      productType: "Beat",
      productPrice: "45",
    },
  ]);
  // Back End
  /*
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
    // Fetch cart items from the backend
    axios.get("/api/cartItems")
      .then((response) => setCartItems(response.data))
      .catch((error) => {
        // Handle error
      });
  }, []);
  */
  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };
  // remove item from the cart
  /*
const handleRemoveItem = (item) => {
  // Make API call to delete the item from the backend
  axios.delete(`/api/cartItems/${item.id}`)
    .then((response) => {
      // Item deleted successfully from the backend
      // Update the UI by removing the item from the cartItems state
      const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
      setCartItems(updatedCartItems);
    })
    .catch((error) => {
      // Handle error
    });
};
  */
  // Show Payment Card
  const [showPaymentCard, setShowPaymentCard] = useState(false);
  const handlePaymentOpen = () => {
    setShowPaymentCard((prevShowPayment) => !prevShowPayment);
  };
  // send payment information:
  const handleAddCard = (cardDetails) => {
    console.log("Card details:", cardDetails);

    /*    
    axios
      .post("/api/cards", cardDetails)
      .then((response) => {
        console.log("Card details added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding card details:", error);
      });*/
  };

  return (
    <div className="container">
      <div className="cartPageContainer">
        <h1 className="cartHeading">Review your Cart</h1>
        <div className="cartContainer">
          <div className="cartLeftContainer">
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
          <CartSummaryBox
            cartItems={cartItems}
            onPaymentOpen={handlePaymentOpen}
          />
        </div>
      </div>
      {showPaymentCard && (
        <PaymentCard
          onPaymentOpen={handlePaymentOpen}
          onAddCard={handleAddCard}
        />
      )}
    </div>
  );
};

export default Cart;
