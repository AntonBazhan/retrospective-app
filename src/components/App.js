import React, { Component } from "react";
import "./App.css";

import Column from "./Column/Column";

class App extends Component {
  state = {
    goodThingsCards: [],
    badThingsCards: [],
    actionItemsCards: [],
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

  handleLikes = (type, id) => {
    let goodThingsCards = [...this.state.goodThingsCards];
    let badThingsCards = [...this.state.badThingsCards];
    let actionItemsCards = [...this.state.actionItemsCards];

    if (type === "Good things") {
      goodThingsCards = goodThingsCards
      .map((card) => {
        if (card.id === id) {
          card.likes++;
        }
        return card;
      })
      .sort((a,b)=>b.likes-a.likes)
    } else if (type === "Bad things") {
      badThingsCards = badThingsCards.map((card) => {
        if (card.id === id) {
          card.likes++;
        }
        return card;
      }).sort((a,b)=>b.likes-a.likes)
    } else if (type === "Action items") {
      actionItemsCards = actionItemsCards.map((card) => {
        if (card.id === id) {
          card.likes++;
        }
        return card;
      }).sort((a,b)=>b.likes-a.likes)
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
          card.likes--;
        }
        return card;
      }).sort((a,b)=>b.likes-a.likes)
    } else if (type === "Bad things") {
      badThingsCards = badThingsCards.map((card) => {
        if (card.id === id) {
          card.likes--;
        }
        return card;
      }).sort((a,b)=>b.likes-a.likes)
    } else if (type === "Action items") {
      actionItemsCards = actionItemsCards.map((card) => {
        if (card.id === id) {
          card.likes--;
        }
        return card;
      }).sort((a,b)=>b.likes-a.likes)
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
