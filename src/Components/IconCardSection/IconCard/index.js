import React from 'react'
import './IconCard.css'
import Button from '../../Buttons/index'
const index = (props) => {
    const { Icon, Header, Paragraph } = props
    return (
        <article className='card'>
            <h2>{Icon}</h2>
            <h3>{Header}</h3>
            <br></br>
            <p>{Paragraph}</p>
            <br></br>
            <br></br>
            <Button buttonStyle='btn--card'>Learn More</Button>
            <br></br>
        </article>
    )
}

export default index
