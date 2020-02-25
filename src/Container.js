import React, { Component } from 'react';
import Slider from './Slider'

const shiftRight = {
    transform: `translateX(-500px)`
}

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slide: 1,
            reverseSlide: 1,
            transform: ''
        }
    }

    moveRight = () => {
        if (this.state.slide < 4) {
            this.setState({
                slide: this.state.slide + 1,
                reverseSlide: this.state.reverseSlide - 1,
                transform: `translateX(${this.state.slide * -500}px)`
            })
        }
    }

    moveLeft = () => {
        if (this.state.slide > 1) {
            this.setState({
                slide: this.state.slide - 1,
                reverseSlide: this.state.reverseSlide + 1,
                transform: `translateX(${this.state.reverseSlide * 500}px)`
            })
        }
    }

    render() {
    const shift = {
        transform: this.state.transform
    }
    let list = this.props.content.map(i => <Slider content={i} />)
    return(
        <div className='container'>
            <button className="button" id="left" onClick={this.moveLeft}></button>
            <div className='content' style={shift}>
            {list}
            </div>
            <button className="button" id="right" onClick={this.moveRight}></button>
        </div>
    )

}
}

export default Container