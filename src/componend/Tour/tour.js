import React, { Component } from "react";
import "./tour.scss";

export default class tour extends Component {
  state = {
    showInfo: false
  };
  handel = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    let { num, sup, img, name, info, link } = this.props.tour;
    return (
      <article className="tour">
        <div className="img-continer">
          <img src={img} alt="cityTourPic" />
          <span className="share-btn">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </span>
        </div>
        <div className="tour-info">
          <h3>{sup} </h3>
          <h4>{name} </h4>
          <h5>
            Brief{""}
            <span onClick={this.handel}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && (
            <p>
              {info}
              <br />
              <a href={link} target="_blank">
                Read More
              </a>
            </p>
          )}
        </div>
      </article>
    );
  }
}
