import React from 'react'
import Hero from '../../Components/Hero/index'
import IconBoxes from '../../Components/IconBoxes/index'
import IconCards from '../../Components/IconCardSection/index'
import BluePicSec from '../../Components/BluePicSec/index'
import ContactCardSec from '../../Components/ContactCardSec/index'
import { homeTitle, homeCardContent } from '../../Data/CardContent';
import { homeHeroContent } from '../../Data/HeroContent'
import './home.css'

const Home = () => {
    return (
        <div id='home'>
            <Hero hero={homeHeroContent}/>
            <IconBoxes/>
            <IconCards title={homeTitle} content={homeCardContent} />
            <BluePicSec/>
            <ContactCardSec/>
        </div>
    )
}

export default Home
