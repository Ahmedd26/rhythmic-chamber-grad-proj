import "./replacePlan.scss";
const ReplacePlan = ({
  onOkayClick,
  onDismissClick,
  existingPlan,
  selectedPlan,
}) => {
  return (
    <div className="replacePlan">
      <div className="replacePlanContent">
        <i className="fa-solid fa-triangle-exclamation doneIco"></i>
        <h1 className="successAddedPlan">Warning</h1>
        <p className="warningMessage">
          You already added&nbsp;
          <b>{existingPlan.title}</b>&nbsp;to your cart. Would you like to
          replace it with&nbsp;<b>{selectedPlan.title}?</b>&nbsp;
        </p>
        <div className="planCartActionButtons">
          <button className="dismissButton" onClick={onDismissClick}>
            Dismiss
          </button>
          <button className="replaceButton" onClick={onOkayClick}>
            Replace
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplacePlan;
