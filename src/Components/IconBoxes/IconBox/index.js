import React from 'react'
import './iconBox.css'

const iconBox = (props) => {
    const { Skill, Icon } = props
    return (
        <div className='iconBox'>
            <h3>{Icon}</h3>
            <h2>{Skill}</h2>
        </div>
    )
}

export default iconBox
