import React, { Component } from "react";
import "./footer.scss";

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <a
            className="links"
            id="ico"
            href="https://www.facebook.com/tamer.aly.9081"
            target="_blank"
            className="fab fa-facebook-square"
          >
            {" "}
          </a>

          <a
            className="links"
            id="ico"
            href="https://twitter.com/mr_tamer"
            target="_blank"
            className="fab fa-twitter"
          >
            {" "}
          </a>

          <a
            className="links"
            id="ico"
            href="https://www.linkedin.com/in/tamer-aly-b093b591/"
            target="_blank"
            className="fab fa-linkedin"
          >
            {" "}
          </a>
          <br />
          <small>
            {" "}
            <b className="last">Powered by Tamer Aly &copy;</b>
          </small>
        </footer>
      </div>
    );
  }
}
