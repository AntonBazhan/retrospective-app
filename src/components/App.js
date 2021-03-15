import React, { Component } from "react";
import "./App.css";

import Column from "./Column/Column";

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
    likes: 0,
    goodThingsCards: [],
    badThingsCards: [],
    actionItemsCards: [],
  };

  userInput = (e, idx) => {
    let newCards = [...this.state.Cards];
    newCards[idx].input = e.target.value;
    this.setState({
      Cards: newCards,
    });
  };

  Delete = (type, id) => {
    let goodThingsCards = [...this.state.goodThingsCards];
    let badThingsCards = [...this.state.badThingsCards];
    let actionItemsCards = [...this.state.actionItemsCards];

    if (type === "Good things") {
      goodThingsCards = goodThingsCards.filter((card) => card.id !== id);
    } else if (type === "Bad things") {
      badThingsCards = badThingsCards.filter((card) => card.id !== id);
    } else if (type === "Action items") {
      actionItemsCards = actionItemsCards.filter((card) => card.id !== id);
    }
    this.setState({
      goodThingsCards,
      badThingsCards,
      actionItemsCards,
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
    let goodThingsCards = [...this.state.goodThingsCards];
    let badThingsCards = [...this.state.badThingsCards];
    let actionItemsCards = [...this.state.actionItemsCards];

    if (type === "Good things") {
      goodThingsCards.push({
        type,
        likes: 0,
        input,
        creationDate: Date.now(),
        id: this.state.goodThingsCards.length,
      });
    } else if (type === "Bad things") {
      badThingsCards.push({
        type,
        likes: 0,
        input,
        creationDate: Date.now(),
        id: this.state.badThingsCards.length,
      });
    } else if (type === "Action items") {
      actionItemsCards.push({
        type,
        likes: 0,
        input,
        creationDate: Date.now(),
        id: this.state.actionItemsCards.length,
      });
    }
    this.setState({
      goodThingsCards,
      badThingsCards,
      actionItemsCards,
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

  handleLikes = (type, id) => {
    let goodThingsCards = [...this.state.goodThingsCards];
    let badThingsCards = [...this.state.badThingsCards];
    let actionItemsCards = [...this.state.actionItemsCards];

    if (type === "Good things") {
      goodThingsCards = goodThingsCards.map((card) => {
        if (card.id === id) {
          card.id++;
        }
        return card;
      });
    } else if (type === "Bad things") {
      badThingsCards = badThingsCards.map((card) => {
        if (card.id === id) {
          card.id++;
        }
        return card;
      });
    } else if (type === "Action items") {
      actionItemsCards = actionItemsCards.map((card) => {
        if (card.id === id) {
          card.id++;
        }
        return card;
      });
    }
    this.setState({
      goodThingsCards,
      badThingsCards,
      actionItemsCards,
    });
  };

  handleDislikes = (type, id) => {
    let goodThingsCards = [...this.state.goodThingsCards];
    let badThingsCards = [...this.state.badThingsCards];
    let actionItemsCards = [...this.state.actionItemsCards];

    if (type === "Good things") {
      goodThingsCards = goodThingsCards.map((card) => {
        if (card.id === id) {
          card.id--;
        }
        return card;
      });
    } else if (type === "Bad things") {
      badThingsCards = badThingsCards.map((card) => {
        if (card.id === id) {
          card.id--;
        }
        return card;
      });
    } else if (type === "Action items") {
      actionItemsCards = actionItemsCards.map((card) => {
        if (card.id === id) {
          card.id--;
        }
        return card;
      });
    }
    this.setState({
      goodThingsCards,
      badThingsCards,
      actionItemsCards,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="text-center">
          <div className="row">
            <Column
              type={"Good things"}
              cards={this.state.goodThingsCards}
              CreateCard={this.CreateCard}
              userInput={this.userInput}
              validateInput={this.validateInput}
              MoveLeft={this.MoveLeft}
              Delete={this.Delete}
              MoveRight={this.MoveRight}
              handleLikes={this.handleLikes}
              handleDislikes={this.handleDislikes}
              color={"goodThings"}
            />
            <Column
              type={"Bad things"}
              cards={this.state.badThingsCards}
              CreateCard={this.CreateCard}
              userInput={this.userInput}
              validateInput={this.validateInput}
              MoveLeft={this.MoveLeft}
              Delete={this.Delete}
              MoveRight={this.MoveRight}
              handleLikes={this.handleLikes}
              handleDislikes={this.handleDislikes}
              color={"badThings"}
            />
            <Column
              type={"Action items"}
              cards={this.state.actionItemsCards}
              CreateCard={this.CreateCard}
              userInput={this.userInput}
              validateInput={this.validateInput}
              MoveLeft={this.MoveLeft}
              Delete={this.Delete}
              MoveRight={this.MoveRight}
              handleLikes={this.handleLikes}
              handleDislikes={this.handleDislikes}
              color={"actionItems"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
