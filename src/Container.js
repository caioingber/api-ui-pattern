import React, { Component } from 'react';
import Slider from './Slider'

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slide: 1,
            reverseSlide: 1,
            transform: '',
        }
    }

    moveRight = () => {
        if (this.state.slide < this.props.content.length) {
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
    let list = this.props.content.map(i => <Slider content={i} count={this.state.slide} length={this.props.content.length}/>)
    return(
        <div className='container'>
            <div className="b-container" >
                <div className='button' id="left" onClick={this.moveLeft}></div>
            </div>
            <div className='content' style={shift}>
            {list}
            </div>
            <div className="b-container">
                <div className='button' id="right" onClick={this.moveRight}></div>
            </div>
        </div>
    )

}
}

export default Container