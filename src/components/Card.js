import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, id, email } = this.props;
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5">
        <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2 className="tc"> {name} </h2>
          <p className="tc"> {email} </p>
        </div>
      </div>
    );
  }
}

export default Card;
