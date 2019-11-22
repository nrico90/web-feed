import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";
import Video from "./components/Video";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import Pages from "./components/Pages";
import { Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";

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
            <Route path="/about" component={AboutUs} />
            <h2>
              <Link to="/pages">Learn more</Link>
              <br />
              <Link to="/about">About us</Link>
            </h2>
          </div>
        </header>

        <div></div>
      </div>
    );
  }
}

export default App;
