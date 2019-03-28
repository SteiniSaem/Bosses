import React from "react";
import { Link } from "react-router-dom";
import { deleteBoss, getBosses } from "../../actions/bossActions";
import { connect } from "react-redux";

class ListViewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boss: this.props.bossItem
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { deleteBoss, bossList } = this.props;
    deleteBoss(this.state.boss);
    console.log(bossList);
  }

  render() {
    return (
      <li className="card">
        <Link to={"/bosses/" + this.state.boss.id}>
          <div className="card-header">
            <span className="boss-name">{this.state.boss.name}</span>
          </div>
          <div className="card-body">
            <img className="boss-img" src={this.state.boss.img} />
          </div>
        </Link>
        <div className="card-footer">
          <button className="delete-btn" onClick={this.handleClick}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    bossList: reduxStoreState.boss.bosses
  };
};

export default connect(
  mapStateToProps,
  { deleteBoss, getBosses }
)(ListViewItem);
