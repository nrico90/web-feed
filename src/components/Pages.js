import React from "react";
import { Link } from "react-router-dom";

export default function Nasa() {
  return (
    <div className="pages-universe">
      <h1>This page has more infomation about NASA</h1>
      <Link to="/">Go back to the main page</Link>
      <br />
      <br />
      <br />
      Click below to find out more: <br />
      <br />
      <a target="_blank" href="https://www.nasa.gov/">
        <button>
          {" "}
          <b>NASA</b>{" "}
        </button>
      </a>
      <a
        target="_blank"
        href="http://nationalgeographic.com.au/tv/cosmos-a-spacetime-odyssey/"
      >
        <button>
          {" "}
          <b>COSMOS</b>{" "}
        </button>
      </a>
    </div>
  );
}
