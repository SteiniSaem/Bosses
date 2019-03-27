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
      <div>
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
