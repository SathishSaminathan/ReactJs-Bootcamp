import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidenav />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
