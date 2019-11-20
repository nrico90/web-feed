import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <video id="background-video" loop autoPlay>
        <source src="./videos/space.mp4" type="video/mp4" />
        <source src="./videos/space.mp4" type="video/ogg" />
      </video>
    );
  }
}

export default Video;
