import React from "react";
import { connect } from "react-redux";
import { setCurrentBoss } from "../../actions/bossActions";

class BossDetails extends React.Component {
  componentDidMount() {
    const { setCurrentBoss } = this.props;
    const { bossId } = this.props.match.params;

    setCurrentBoss(bossId);
  }

  render() {
    const { boss } = this.props;
    let display;

    if (boss !== undefined) {
      display = (
        <div className="boss-details">
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

          <div className>
            <img className="boss-img" src={boss.img} />
          </div>
          <div className="boss-header">
            <h1>{boss.name}</h1>
          </div>

          <div className="boss-description">
            <p>{boss.description}</p>
          </div>
        </div>
      );
    } else {
      display = <h1>Not</h1>;
    }

    return <>{display}</>;
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    boss: reduxStoreState.boss.currentBoss
  };
};

export default connect(
  mapStateToProps,
  { setCurrentBoss }
)(BossDetails);
