import React from 'react'
import Slider from './Slider'

function Container(props) {
    // let list = props.content.map(i => <Slider content={i} />)
    return(
        <Slider content={props.content}/>
    )

}

export default Container