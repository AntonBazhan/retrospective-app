import React, { Component } from "react";

import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardFormVisible: false,
    };
  }
  changeCardFormVisibility(isCardFormVisible) {
    this.setState({ isCardFormVisible });
  }

  handleFormVisibility() {
    this.setState({ isCardFormVisible: true });
  }

  render() {
    return (
      <div className="col">
        <h4>{this.props.type}</h4>
        <span> {this.props.cards.length} </span>

        {!this.state.isCardFormVisible ? (
          <button
            type="button"
            className="addButton"
            onClick={this.handleFormVisibility.bind(this)}
          >
            +
          </button>
        ) : (
          <CardForm
            type={this.props.type}
            color={this.props.color}
            CreateCard={this.props.CreateCard.bind(this)}
            changeCardFormVisibility={this.changeCardFormVisibility.bind(this)}
          />
        )}
        {this.props.cards.map((card, idx) => {
          return (
            <Card
              type={card.type}
              key={card.type + idx}
              idx={idx}
              cardId={card.id}
              value={card.input}
              userInput={this.props.userInput}
              validateInput={this.props.validateInput}
              MoveLeft={this.props.MoveLeft}
              Delete={this.props.Delete}
              MoveRight={this.props.MoveRight}
              likesCount={card.likes}
              handleLikes={this.props.handleLikes}
              handleDislikes={this.props.handleDislikes}
              color={this.props.color}
            />
          );
        })}
      </div>
    );
  }
}

export default Column;
