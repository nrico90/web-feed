import React, { Component } from "react";

export default class Form extends Component {
  handler = event => {
    event.preventDefault();
    // console.log("hello");
  };

  render() {
    return (
      <div className="add-comment">
        <form onSubmit={this.handler}>
          <label>
            Comment:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
