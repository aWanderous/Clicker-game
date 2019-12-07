import React from "react";
import "../styles/Card.css";

function Card({ clickHandler, id, image, name }) {

	return (
	  <div className="card-holder m-2">
		<img
		  src={image}
		  alt={name}
		  onClick={() => clickHandler(id)}
		/>
	  </div>
	);
  }
export default Card;
