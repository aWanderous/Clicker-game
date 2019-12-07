import React from "react";
import "../styles/Card.css";

function Card({ clickHandler, id, image, name }) {

	return (
	  <div className="card-holder">
		<img
		  src={image}
		  alt={name}
		  className="m-2"
		  onClick={() => clickHandler(id)}
		/>
	  </div>
	);
  }
export default Card;
