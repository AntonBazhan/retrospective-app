import React, { Component } from "react";
import moment from "moment";
class Card extends Component {
  constructor(props) {
    super(props);

    this.handleLikes = this.props.handleLikes.bind(
      this,
      this.props.type,
      this.props.cardId
    );
    this.handleDislikes = this.props.handleDislikes.bind(
      this,
      this.props.type,
      this.props.cardId
    );

    this.Delete = this.props.Delete.bind(
      this,
      this.props.type,
      this.props.cardId
    );
  }

  render() {
    const { color, value, likesCount, creationDate } = this.props;
    return (
      <div className={"boardItem card " + color}>
        <br />
        <textarea
          className="flexform"
          placeholder="Enter Text Here"
          defaultValue={value}
        />
        <br />

        <span>
          Creation:{moment(creationDate).format("dddd DD MMMM YYYY, HH:mm:ss")}
        </span>
        <div className="functionNav">
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
        </div>
      </div>
    );
  }
}
export default Card;
