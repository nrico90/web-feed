import React, { Component } from "react";
import "./App.css";
//import Video from "./videos/video.mp4";
import Title from "./components/Title";
//import Background from "./components/background-image";
import LikeCounter from "./components/LikeCounter";
import Image from "./components/Image";
import Video from "./components/Video";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import Pages from "./components/Pages";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    background: "#282c34",
    textColor: "black"
  };

  toggleDarkLight = () => {
    if (this.state.backgroundColor === "white") {
      this.setState({ backgroundColor: "#282c34", textColor: "black" });
    } else {
      this.setState({ backgroundColor: "white", textColor: "#282c34" });
    }
  };

  render() {
    return (
      <div>
        <Video />
        <Nav />
        <button onClick={this.toggleDarkLight}>Season</button>
        {/* PASSING PROPS FROM APP TO PROFILE */}
        {/* <Title /> */}

        <header
          style={{
            backgroundColor: this.state.backgroundColor,
            color: this.state.textColor
          }}
        >
          <div>
            <Route exact path="/" component={Image} />
            <Route path="/pages" component={Pages} />
          </div>
          <br />
          <br />
          <div>
            <h2>
              <Link to="/pages">More information</Link>
            </h2>
          </div>
          <br />
          <br />
        </header>

        <div></div>
      </div>
    );
  }
}

export default App;
