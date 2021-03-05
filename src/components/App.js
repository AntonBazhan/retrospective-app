import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card.jsx";

class App extends Component {
  state = {
    goodThingsCount: 0,
    badThingsCount: 0,
    actionItemsCount: 0,
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
      Cards: this.state.Cards.filter((card) => {
        if (card.id !== id) {
          return true;
        } else {
          this.ChangeCounter(card.type, "decrease");
          return false;
        }
      }),
    });
  };

  ChangeCounter = (type, operation) => {
    let goodThingsCount = this.state.goodThingsCount;
    let badThingsCount = this.state.badThingsCount;
    let actionItemsCount = this.state.actionItemsCount;

    if (type === "Good things") {
      operation === "increase" ? goodThingsCount++ : goodThingsCount--;
    } else if (type === "Bad things") {
      operation === "increase" ? badThingsCount++ : badThingsCount--;
    } else if (type === "Action items") {
      operation === "increase" ? actionItemsCount++ : actionItemsCount--;
    }
    this.setState({ goodThingsCount, badThingsCount, actionItemsCount });
  };

  CreateCard = (type, input) => {
    let goodThingsCount = this.state.goodThingsCount;
    let badThingsCount = this.state.badThingsCount;
    let actionItemsCount = this.state.actionItemsCount;

    if (type === "Good things") {
      goodThingsCount++;
    } else if (type === "Bad things") {
      badThingsCount++;
    } else if (type === "Action items") {
      actionItemsCount++;
    }
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
      goodThingsCount,
      badThingsCount,
      actionItemsCount,
    });
  };

  MoveLeft = (id, idx) => {
    let goodThingsCount = this.state.goodThingsCount;
    let badThingsCount = this.state.badThingsCount;
    let actionItemsCount = this.state.actionItemsCount;
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "Good things") {
        goodThingsCount--;
        actionItemsCount++;
        card.type = "Action items";
      } else if (card.id === id && card.type === "Bad things") {
        card.type = "Good things";
        badThingsCount--;
        goodThingsCount++;
      } else if (card.id === id && card.type === "Action items") {
        card.type = "Bad things";
        actionItemsCount--;
        badThingsCount++;
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards,
      goodThingsCount,
      badThingsCount,
      actionItemsCount,
    });
  };

  MoveRight = (id, idx) => {
    let goodThingsCount = this.state.goodThingsCount;
    let badThingsCount = this.state.badThingsCount;
    let actionItemsCount = this.state.actionItemsCount;
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "Good things") {
        card.type = "Bad things";
        goodThingsCount--;
        badThingsCount++;
      } else if (card.id === id && card.type === "Bad things") {
        card.type = "Action items";
        badThingsCount--;
        actionItemsCount++;
      } else if (card.id === id && card.type === "Action items") {
        card.type = "Good things";
        actionItemsCount--;
        goodThingsCount++;
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards,
      goodThingsCount,
      badThingsCount,
      actionItemsCount,
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
              <span> {this.state.goodThingsCount} </span>
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
              <span>{this.state.badThingsCount} </span>
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
              <span>{this.state.actionItemsCount} </span>
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
