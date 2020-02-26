import React from 'react';

function Slider(props) {
    let imageUrl = props.content.image

    return(
        <div className="slidebox">
            <p className="count">{props.count} of {props.length}</p>
            <h2 className="title">{props.content.title}</h2>
            <h4 className="cuisine">{props.content.cuisine}</h4>
            <div className="pic" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="recipe"><p >{props.content.recipe}</p></div>
        </div>
    )
}

export default Slider