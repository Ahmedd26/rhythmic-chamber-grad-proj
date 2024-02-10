import { Link } from "react-router-dom";
import "./cartOverlay.scss";
const CartOverlay = ({ onOkayClick }) => {
  return (
    <div className="cartOverlay">
      <div className="cartOverlayContent">
        <i className="fa-regular fa-thumbs-up doneIco"></i>
        <h1 className="successAddedPlan">Plan is now added to your cart!</h1>
        <div className="planCartActionButtons">
          <Link to="/cart">Go to your Cart</Link>
          <button className="okayButton" onClick={onOkayClick}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
