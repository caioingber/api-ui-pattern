import React from 'react';

function Slider(props) {
    let imageUrl = props.content.image

    return(
        <div className="slidebox">
            <div className="button" id="left"></div>
            <div className="content">
                <h3 className="title">{props.content.title}</h3>
                <h4 className="cuisine">{props.content.cuisine}</h4>
                <div className="pic" style={{backgroundImage: `url(${imageUrl})`}}></div>
                <p className="recipe">{props.content.recipe}</p>
            </div>
            <div className="button" id="right"></div>
        </div>
    )
}

export default Slider