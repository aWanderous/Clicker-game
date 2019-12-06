import React from 'react';
// import '../styles/Card.css';
import armor from "../armors.json";

class Card extends React.Component {
  state = {armor}
  
  render () {
  var armorList = this.state.armor.map((armor) => 
  <div  key = {armor.id}>
    <img src={armor.image} alt={armor.name} />
  </div>)

  return (

      <div className="picks">
      <h1 className="title">Amours List</h1>
      {armorList}
      </div>
  );
}

}

export default Card;
