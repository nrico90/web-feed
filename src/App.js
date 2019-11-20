import React, { Component } from "react";
import "./App.css";
//import Video from "./videos/video.mp4";
import Title from "./components/Title";
// import Background from "./components/background-image";
import LikeCounter from "./components/LikeCounter";
import Image from "./components/Image";
import Video from "./components/Video";
import Nav from "./components/Nav";
import Form from "./components/Form";

class App extends Component {
  state = {
    backgroundColor: "#282c34",
    textColor: "white"
  };

  toggleDarkLight = () => {
    if (this.state.backgroundColor === "white") {
      this.setState({ backgroundColor: "#282c34", textColor: "white" });
    } else {
      this.setState({ backgroundColor: "white", textColor: "#282c34" });
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <Nav />
          <Video />
          <button onClick={this.toggleDarkLight}>Season</button>
          {/* PASSING PROPS FROM APP TO PROFILE */}
          {/* <Title /> */}
        </div>

        <header
          className="App-header"
          style={{
            backgroundColor: this.state.backgroundColor,
            color: this.state.textColor
          }}
        >
          <div>
            <Image />
          </div>
        </header>

        <div></div>
      </div>
    );
  }
}

export default App;
