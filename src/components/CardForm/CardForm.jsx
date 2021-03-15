import React, { Component } from "react";

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleFormVisibility() {
    this.props.changeCardFormVisibility(false);
  }

  handleCreationCard() {
    this.props.changeCardFormVisibility(false);
    this.props.CreateCard(this.props.type, this.state.value);
  }

  render() {
    return (
      <div className={"boardItem card " + this.props.color}>
        <br />
        <textarea
          className="flexform"
          placeholder="Enter Text Here"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <div className="functionNav">
          <button onClick={this.handleCreationCard.bind(this)}>Save</button>

          <button onClick={this.handleFormVisibility.bind(this)}>Cancel</button>
        </div>
      </div>
    );
  }
}
export default CardForm;
