import React from 'react'
import Slider from './Slider'

function Container(props) {
    let list = props.content.recipes.map(i => <Slider content={i} />)
    return(
        {list}
    )

}

export default Container