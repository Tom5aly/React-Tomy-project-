import React from "react";
import Logo from "../../logo.jpg";

import "./Navbar.scss";
export default function navbar() {
  return (
    <nav className="navbar fixed-top navbar-light bg-light" id="navbar">
      <li>
        <a className="navbar-brand" href="#">
          <span>Tamer</span>
          <span>Aly</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          home
        </a>
      </li>
      <li>
        <a
          href="https://tom5aly.github.io/profile/"
          target="_blank"
          className="nav-link"
        >
          about me
        </a>
      </li>
      <li>
        <a href="mailto:tom.aly@hotmail.com" className="nav-link  active">
          get in touch
        </a>
      </li>
    </nav>
  );
}
