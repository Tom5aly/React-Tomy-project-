import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tour/tour";
import { tourData } from "../Tour/tourData";
export default class TourList extends Component {
  state = {
    tomyTour: tourData
  };
  render() {
    // console.log(this.state.tomyTour);
    let { tomyTour } = this.state;
    return (
      <div>
        <section className="TourList">
          {tomyTour.map(tour => (
            <Tour key={tour.num} tour={tour} />
          ))}
        </section>
      </div>
    );
  }
}
