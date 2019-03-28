import React from "react";
import { connect } from "react-redux";
import { setCurrentBoss, createBoss } from "../../actions/bossActions";

class BossForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      img: "",
      description: ""
    };

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    const { createBoss, button } = this.props;

    const obj = {};
    obj["name"] = this.state.name;
    obj["img"] = this.state.img;
    obj["description"] = this.state.description;

    if (button === "Create") {
      createBoss(obj);
      console.log("HERE");
    } else {
      console.log("EDITING NOW?");
    }
  }

  render() {
    const { button, title } = this.props;
    return (
      <div className="create-boss-form">
        <h2>{title}</h2>
        <input
          name="name"
          onInput={e => this.onInput(e)}
          className="create-boss-form-input"
          placeholder="Boss name"
        />
        <input
          name="img"
          onInput={e => this.onInput(e)}
          className="create-boss-form-input"
          placeholder="Boss image url"
        />
        <textarea
          name="description"
          onInput={e => this.onInput(e)}
          className="create-boss-form-input boss-description-input"
          placeholder="Description"
        />
        <button onClick={this.onSubmit} className="create-boss-btn">
          {button}
        </button>
      </div>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {};
};

export default connect(
  mapStateToProps,
  { setCurrentBoss, createBoss }
)(BossForm);
