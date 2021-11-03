import React from 'react'
import './hero.css'

const index = ({ hero, buttons }) => {
    return (
        <>
        {hero?.map((hero, i) => (
        <section key={hero.id} className='hero-section'>
            <div className='hero-title'>
            <h2>{hero.header}</h2>
            <h4>{hero.subheader}</h4>
            </div>
            <br></br>
            <div className='hero-btns'>
            {hero.button1}
            {hero.button2}
            </div>
        </section>
        ))}  
        </>
    )
}

export default index
