import React from "react";

const BossForm = ({ word }) => {
  return (
    <div className="create-boss-form">
      <h2>{word} a boss</h2>
      <input className="create-boss-form-input" placeholder="Boss name" />
      <input className="create-boss-form-input" placeholder="Boss image url" />
      <textarea
        className="create-boss-form-input boss-description-input"
        placeholder="Description"
      />
      <button className="create-boss-btn">{word} Boss</button>
    </div>
  );
};

export default BossForm;
