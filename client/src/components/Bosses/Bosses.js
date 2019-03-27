import React from "react";
import ListView from "../ListView/ListView";
import BossForm from "../BossForm/BossForm";
import { connect } from "react-redux";

class Bosses extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bossList } = this.props;
    return (
      <div className="bosses">
        <BossForm title="Create a boss" button="Create" />
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
