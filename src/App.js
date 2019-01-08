import React, { Component } from "react";
import TourList from "./componend/TourList/indes";
import "./App.scss";
import Navbar from "./componend/Navbar/navbar";
import Footer from "./componend/footer/footer";

class App extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <TourList />
        <Footer />
      </section>
    );
  }
}

export default App;
