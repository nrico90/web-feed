import React from "react";
import "./App.css";
// import Video from "./videos/video.mp4";
import Video from "./components/Video";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <div className="App">
        <Title />
        <Video />
        <header className="App-header">
          <p>making progress</p>
        </header>
      </div>
    </main>
  );
}

export default App;
