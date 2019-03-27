import React from "react";
import { connect } from "react-redux";
import { setCurrentBoss } from "../../actions/bossActions";
import BossForm from "../BossForm/BossForm";

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
          <BossForm title="Edit boss" button="Edit" />
          <div className="boss-infoa">
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
