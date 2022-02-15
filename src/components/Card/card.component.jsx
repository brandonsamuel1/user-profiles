import React from 'react';
import './card.styles.css'

function Card(props) {
    return(
        <div className='card'>
            <img src={`https://robohash.org/${props.user.id}`} alt="John" />
            <h1>{props.user.name}</h1>
            <p className="title">CEO & Founder, {props.user.company.name}</p>
            <p>Harvard University</p>
            <a><i className="fa fa-dribbble"></i></a>
            <a><i className="fa fa-twitter"></i></a>
            <a><i className="fa fa-linkedin"></i></a>
            <a><i className="fa fa-facebook"></i></a>
            <p><button>Contact</button></p>
        </div>
    )
}

export default Card;