// import React, { Component } from "react";

// class Video extends Component {
//   render() {
//     return (
//       <video width="320" height="240" controls>
//         <source src="./videos/video.mp4" type="video/ogg" />
//       </video>
//     );
//   }
// }

import React, { Component } from "react";

// class Video extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             video src: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
//         }
//     }
class Video extends Component {
  render() {
    return (
      <video id="background-video" loop autoPlay>
        <source src="videos/video.mp4" type="video/mp4" />
        <source src="videos/video.mp4" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    );
  }
}

export default Video;
