import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.userInput = this.props.userInput.bind(this);
    this.handleLikes = this.props.handleLikes.bind(this);
    this.handleDislikes = this.props.handleDislikes.bind(this);
    this.MoveLeft = this.props.MoveLeft.bind(this);
    this.MoveRight = this.props.MoveRight.bind(this);
  }

  render() {
    const {
      color,
      value,
      idx,
      validateInput,
      cardId,
      likesCount,
      createDate,
    } = this.props;
    return (
      <div className={"boardItem card " + color}>
        <br />
        <textarea
          className="flexform"
          placeholder="Enter Text Here"
          value={value}
          onChange={(e) => this.userInput(e, idx)}
          onBlur={validateInput}
        />
        <br />
        <div className="functionNav">
          <button
            onClick={() => {
              this.MoveLeft(cardId, idx);
            }}
          >
            {" "}
            <i
              className="fas fa-caret-left left"
              title="Move card to the left"
            />
          </button>
          <i>Created: {createDate}</i>
          <button onClick={() => this.handleLikes(idx)}>
            {" "}
            <i className="far fa-far fa-thumbs-up" title="Likes" />
          </button>

          <span>{likesCount}</span>

          <button onClick={() => this.handleDislikes(idx)}>
            {" "}
            <i className="far fa-thumbs-down" title="Dislikes" />
          </button>

          <button onClick={() => this.Delete(cardId)}>
            {" "}
            <i className="far fa-trash-alt" title="Delete card" />
          </button>
          <button
            onClick={() => {
              this.MoveRight(cardId, idx);
            }}
          >
            {" "}
            <i
              className="fas fa-caret-right right"
              title="Move card to the right"
            />
          </button>
        </div>
      </div>
    );
  }
}
export default Card;
