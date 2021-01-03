import React from 'react';
import './card.component.css';

export const Card = props => {
   return (
      <div className="card-container">
         <img src={`https://robohash.org/${props.friend.id}?set=set5&size=200x200`} alt="robot"/>
         <div>
            <h3> {props.friend.name} </h3>
            <p> {props.friend.email} </p>
         </div>
      </div>
   )
}