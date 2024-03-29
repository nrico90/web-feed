import React, { Component } from "react";
import "./AboutUs.css";

class PagesForm extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }
  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const email = e.target.elements.email.value.trim();
    const name = e.target.elements.name.value.trim();

    // Make sure name and comment boxes are filled
    if (name && email && comment) {
      const commentObject = { name, email, comment };

      this.props.handleAddComment(commentObject);

      // Publish comment
      /*global Ably*/
      const channel = Ably.channels.get("comments");
      channel.publish("add_comment", commentObject, err => {
        if (err) {
          console.log("Unable to publish message; err = " + err.message);
        }
      });

      // Clear input fields
      e.target.elements.comment.value = "";
      e.target.elements.email.value = "";
      e.target.elements.name.value = "";
    }
  }

  render() {
    return (
      <div>
        <h3 className="title">Contact with us</h3>
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div className="control">
              <input
                type="text"
                className="input"
                email="email"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                name="comment"
                placeholder="Add a comment"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <br />
            <div className="control">
              <button className="button is-primary">Send</button>
            </div>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default PagesForm;
