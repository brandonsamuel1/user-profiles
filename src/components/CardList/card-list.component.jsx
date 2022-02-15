import React from 'react';
import Card from '../Card/card.component';
import './card-list.styles.css'

function CardList(props) {
    return(
        <div className="card-list">
          {props.users.map( (user) => <Card key={props.users.id} user={user}/> )}
        </div>
    )
}

export default CardList;