import React from 'react';

function Slider(props) {
    return(
        <div className="slidebox">
            <div className="button" id="left"></div>
            <div className="content">
                <h3 className="title"></h3>
                <h4 className="cuisine"></h4>
                <div className="pic"></div>
                <p className="recipe"></p>
            </div>
            <div className="button" id="right"></div>
        </div>
    )
}

export default Slider