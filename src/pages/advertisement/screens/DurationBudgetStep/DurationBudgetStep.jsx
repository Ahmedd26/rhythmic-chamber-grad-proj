import React from "react";
import "./durationBudgetStep.scss";
const DurationBudgetStep = ({
  nextStep,
  prevStep,
  campaignData,
  setCampaignData,
}) => {
  return (
    <div className="durationBudgetStep">
      <h1 className="durationBudgetStepHeading">Set Duration & Budget</h1>
      <div className="formHolderDurationBudget">
        <div className="formDurationBudgetItem">
          <h2 className="__itemTitle">Duration</h2>
          <div className="inputLabel">
            <input
              type="text"
              placeholder="7"
              value={campaignData.duration}
              onChange={(e) =>
                setCampaignData({ ...campaignData, duration: e.target.value })
              }
            />
            <label>Days</label>
          </div>
        </div>
        <div className="formDurationBudgetItem">
          <h2 className="__itemTitle">Start Date</h2>
          <div className="inputLabel">
            <input
              type="date"
              value={campaignData.startDate}
              onChange={(e) =>
                setCampaignData({ ...campaignData, startDate: e.target.value })
              }
            />
          </div>
        </div>
        <div className="formDurationBudgetItem">
          <h2 className="__itemTitle">Budget</h2>
          <div className="inputLabel">
            <input
              type="text"
              placeholder="$0.00"
              value={campaignData.budget}
              onChange={(e) =>
                setCampaignData({ ...campaignData, budget: e.target.value })
              }
            />
            <label>Per Day</label>
          </div>
        </div>
      </div>
      <div className="navigationActionButtons">
        <button className="navActBtn" onClick={prevStep}>
          Previous
        </button>
        <button className="navActBtn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DurationBudgetStep;
