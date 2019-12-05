import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import './App.css';

class App extends Component {
  state = {
    image: "",
    pickedCard: [],
    highScore: 0,
  };



render () {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container">
        <Card />
      </div>
      <Footer />
    </div>
  );
}
}
export default App;
