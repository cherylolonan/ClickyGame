import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="current-score">Current Score: {props.score}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;