import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import armors from "./armors.json";

class App extends Component {
	constructor() {
		super();
		this.state = {
			isGuessCorrect: true,
			armors: armors,
			score: 0,
			maxScore: 24,
			highScore: 0,
			message: "CLICK AN IMAGE TO BEGIN!"
		};
	}

	handleClick = (id) => {
		// Variable to hold the tiles state.
		const armorState = this.state.armors;
		// Search through character tiles to find the one that matches the clicked id.
		const cardClicked = armorState.filter((armor) => armor.id === id);

		// If the tile isn't clicked...
		if (!cardClicked[0].clicked) {
			// ...set it to now be clicked
			cardClicked[0].clicked = true;
			// ...call this function to register the correct guess
			this.handleCorrectClick();

			// ... randomize character tiles
			this.shuffle(armorState);

			this.setState({ armorState });
		} else {
			this.handleIncorrectClick();
		}
	};

	shuffle = (choices) => {
		var i, j, temp;
		for (i = choices.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			temp = choices[i];
			choices[i] = choices[j];
			choices[j] = temp;
		}
		return choices;
	};

	handleCorrectClick = () => {
		this.setState({ isGuessCorrect: true });
		if (this.state.score + 1 > this.state.highScore) {
			this.setState({ highScore: this.state.highScore + 1 });
		}
		if (this.state.score + 1 >= this.state.maxScore) {
			this.setState({
				score: this.state.score + 1,
				message: "CONGRATS! YOU WIN!",
				messageClass: "correct"
			});
		} else {
			this.setState({
				score: this.state.score + 1,
				message: "YOU GUESSED CORRECTLY!",
				messageClass: "correct"
			});
		}
	};

	handleIncorrectClick = () => {
		this.setState({
			message: "INCORRECT. PLAY AGAIN?",
			isGuessCorrect: false
		});
		this.resetGame();
	};

	resetGame = (id) => {
		const armorState = this.state.armors;
		for (let i = 0; i < armors.length; i++) {
			armorState[i].clicked = false;
		}
		this.setState({ score: 0 });
	};

	render() {
		const {message,score,armors, highScore } =this.state;
		return (
			<div id='app'>
				<Navbar 
				score={score}
				highScore={highScore}
				/>
				<Header 
				message={message}
				/>
				<div className='container'>
					<div className='row'>
						{armors.map(({id, name, image, clicked }) => (
						<Card 
						key={id}
						id={id}
						name={name}
						image={image}
						clicked={clicked}
						clickHandler={this.handleClick}
						/>
						))}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
export default App;
