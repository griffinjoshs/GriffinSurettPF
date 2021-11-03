import React from 'react'
import './FooterTop.css'
import { FaInstagram, FaGithub, FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';

const index = () => {
    return (
        <div className='footer-top'>
            <h4>Get Connected with Me on Social Media</h4>
            <ul className='icons'>
                <li><a href='/'><FaGithub/></a></li>
                <li><a href='/'><FaLinkedinIn/></a></li>
                <li><a href='/'><FaFacebookSquare/></a></li>
                <li><a href='/'><FaInstagram/></a></li>
            </ul>
        </div>
    )
}

export default index
