import React from 'react';
import './card-list.component.css';
import { Card } from '../card/card.component';

export const CardList = props => {
   return (
      <div className="card-list">
         {props.friends.map(friend => (
            <Card key={friend.id} friend={friend}> </Card>
         ))}
      </div>
   );
}