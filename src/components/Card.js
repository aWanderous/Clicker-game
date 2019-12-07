import React, { Component } from "react";
// import '../styles/Card.css';
import armor from "../armors.json";
import "../styles/Card.css";

class Card extends Component {
	state = { armor };

	render() {
		const armorList = this.state.armor.map((armor) => (
			<div className='col-sm' key={armor.id}>
				<img src={armor.image} alt={armor.name} />
			</div>
		));

		function shuffle(arr) {
			var i, j, temp;
			for (i = arr.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
			return arr;
		}
		
		shuffle(armorList);

		return (
			<div id='picks'>
				<h2 className='title'>Game board</h2>
				<div id='board'>{armorList}</div>
			</div>
		);
	}
}

export default Card;
