import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.userInput = this.props.userInput.bind(
      this,
      this.props.type,
      this.props.cardId
    );
    this.handleLikes = this.props.handleLikes.bind(
      this,
      this.props.type,
      this.props.cardId
    );
    this.handleDislikes = this.props.handleDislikes.bind(this);
    this.MoveLeft = this.props.MoveLeft.bind(this);
    this.MoveRight = this.props.MoveRight.bind(this);
    this.Delete = this.props.Delete.bind(
      this,
      this.props.type,
      this.props.cardId
    );
  }

  render() {
    const { color, value, idx, cardId, likesCount } = this.props;
    return (
      <div className={"boardItem card " + color}>
        <br />
        <textarea
          className="flexform"
          placeholder="Enter Text Here"
          defaultValue={value}
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

          <button onClick={this.handleLikes}>
            {" "}
            <i className="far fa-far fa-thumbs-up" title="Likes" />
          </button>

          <span>{likesCount}</span>

          <button onClick={this.handleDislikes}>
            {" "}
            <i className="far fa-thumbs-down" title="Dislikes" />
          </button>

          <button onClick={this.Delete}>
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
