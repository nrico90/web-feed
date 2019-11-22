import React from "react";
import { Link } from "react-router-dom";

export default function Nasa(props) {
  return (
    <div className="pages-universe">
      <h1>This page has more infomation about NASA</h1>
      <Link to="/">Go back to the main page</Link>
      <br />
      <br />
      <br />
      Click on the links below to find out more: <br />
      <br />
      <a target="_blank" href="https://www.nasa.gov/">
        NASA oficial page
      </a>
    </div>
  );
}
