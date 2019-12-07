import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

class App extends Component {
	state = {
		image: "",
		pickedCard: [],
		highScore: 0
	};

	render() {
		return (
			<div id='app'>
				<Navbar />
				<Header />
				<div className='container'>
					<div className='row'>
						<Card />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
export default App;
