import React from 'react'
import './ContactCard.css'
import { BsPhone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const index = () => {
    return (
        <>
        <article className='contact-card'>
            <h2><BsPhone/></h2>
            <h3>Text Me</h3>
            <p>(732) 455-9509</p>
        </article>
         <article className='contact-card'>
         <h2><FiMail/></h2>
         <h3>Email Me</h3>
         <p>griffin@griffinsurett.com</p>
     </article>
     </>
    )
}

export default index
