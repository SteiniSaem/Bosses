import React from "react";
import ListView from "../ListView/ListView";
import { connect } from "react-redux";

class Bosses extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bossList } = this.props;
    return (
      <div className="bosses">
        <div className="create-boss-form">
          <h2>Create a boss</h2>
          <input className="create-boss-form-input" placeholder="Boss name" />
          <input
            className="create-boss-form-input"
            placeholder="Boss image url"
          />
          <textarea
            className="create-boss-form-input boss-description-input"
            placeholder="Description"
          />
          <button className="create-boss-btn">Create Boss</button>
        </div>
        <ListView list={bossList} />
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    bossList: reduxStoreState.boss.bosses
  };
};

export default connect(mapStateToProps)(Bosses);
