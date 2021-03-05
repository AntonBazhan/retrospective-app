import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card.jsx";

class App extends Component {
  state = {
    categories: {
      goodThings: [],
      badThings: [],
      actionItems: [],
    },
    userInput: "",
    id: 0,
    Cards: [],
    likes: 0,
  };

  userInput = (e, idx) => {
    let newCards = [...this.state.Cards];
    newCards[idx].input = e.target.value;
    this.setState({
      Cards: newCards,
    });
  };

  validateInput = (e) => {
    if (e.target.value === "") {
      window.alert("input required");
    }
  };
  Delete = (id) => {
    this.setState({
      Cards: this.state.Cards.filter((card) => card.id !== id),
    });
  };

  CreateCard = (type, input) =>
    this.setState({
      Cards: [
        ...this.state.Cards,
        {
          id: this.state.id,
          type: type,
          input: input,
          likes: 0,
        },
      ],
      id: this.state.id + 1,
    });

  MoveLeft = (id, idx) => {
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "Good things") {
        card.type = "Action items";
      } else if (card.id === id && card.type === "Bad things") {
        card.type = "Good things";
      } else if (card.id === id && card.type === "Action items") {
        card.type = "Bad things";
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards,
    });
  };

  MoveRight = (id, idx) => {
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "Good things") {
        card.type = "Bad things";
      } else if (card.id === id && card.type === "Bad things") {
        card.type = "Action items";
      } else if (card.id === id && card.type === "Action items") {
        card.type = "Good things";
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards,
    });
  };

  handleLikes = (idx) => {
    let newCards = [...this.state.Cards];
    newCards[idx].likes++;
    this.setState({
      Cards: newCards,
    });
  };

  handleDislikes = (idx) => {
    let newCards = [...this.state.Cards];
    newCards[idx].likes--;
    this.setState({
      Cards: newCards,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="text-center">
          <div className="row">
            <div className="col">
              <h4>Good things</h4>
              <span> 0 </span>
              <button
                type="button"
                className="addButton"
                onClick={() => this.CreateCard("Good things", "")}
              >
                +
              </button>

              {this.state.Cards.map((card, idx) => {
                if (card.type === "Good things") {
                  return (
                    <Card
                      key={"Good things" + idx}
                      idx={idx}
                      cardId={card.id}
                      value={card.input}
                      userInput={this.userInput}
                      validateInput={this.validateInput}
                      MoveLeft={this.MoveLeft}
                      Delete={this.Delete}
                      MoveRight={this.MoveRight}
                      likesCount={card.likes}
                      handleLikes={this.handleLikes}
                      handleDislikes={this.handleDislikes}
                      color={"goodThings"}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="col">
              <h4>Bad things</h4>
              <span> 0 </span>
              <button
                type="button"
                className="addButton"
                onClick={() => this.CreateCard("Bad things", "")}
              >
                +
              </button>

              {this.state.Cards.map((card, idx) => {
                if (card.type === "Bad things") {
                  return (
                    <Card
                      key={"Bad things" + idx}
                      idx={idx}
                      cardId={card.id}
                      value={card.input}
                      userInput={this.userInput}
                      validateInput={this.validateInput}
                      MoveLeft={this.MoveLeft}
                      Delete={this.Delete}
                      MoveRight={this.MoveRight}
                      likesCount={card.likes}
                      handleLikes={this.handleLikes}
                      handleDislikes={this.handleDislikes}
                      color={"badThings"}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="col">
              <h4>Action items</h4>
              <span> 0 </span>
              <button
                type="button"
                className="addButton"
                onClick={() => this.CreateCard("Action items", "")}
              >
                +
              </button>

              {this.state.Cards.map((card, idx) => {
                if (card.type === "Action items") {
                  return (
                    <Card
                      key={"Action items" + idx}
                      idx={idx}
                      cardId={card.id}
                      value={card.input}
                      userInput={this.userInput}
                      validateInput={this.validateInput}
                      MoveLeft={this.MoveLeft}
                      Delete={this.Delete}
                      MoveRight={this.MoveRight}
                      likesCount={card.likes}
                      handleLikes={this.handleLikes}
                      handleDislikes={this.handleDislikes}
                      color={"actionItems"}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
