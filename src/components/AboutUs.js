import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs(props) {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <Link to="/">Go back to the main page</Link>
      <br />
      <br />
      <br />
      <br />
      <b>
        <h2>We are Natalia and Karla</h2>
      </b>
      <img src="https://scontent.fams1-2.fna.fbcdn.net/v/t1.0-9/41921278_2037197352977596_3531365829243305984_n.jpg?_nc_cat=104&_nc_oc=AQlaFpst0mYMp-IPncHiCL1b4ue2DBgVKrtmAJUM3H8Ocy2shAMyVe7gnUAChtVyk0U&_nc_ht=scontent.fams1-2.fna&oh=8c6ded1e9c7b6b64e068e8f19d71db2a&oe=5E82A25A"></img>
      <img src="https://scontent.fams1-1.fna.fbcdn.net/v/t1.0-9/30441498_1492311624210683_3388239041991278592_n.jpg?_nc_cat=111&_nc_oc=AQkCRSqC88-3pdUkohlT-YzdgjYF_uXLlsRW-J_BHAGrN6eay13_3Rthx7iaQOQzwrg&_nc_ht=scontent.fams1-1.fna&oh=55f10b4c8f3f3e5efeceee54ac74c403&oe=5E8343D5"></img>
    </div>
  );
}
