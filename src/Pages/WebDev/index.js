import React from 'react'
import Hero from '../../Components/Hero/index'
import IconCards from '../../Components/IconCardSection'
import { frontendCardContent, frontEndTitle, webDevCardContent, webDevTitle } from '../../Data/CardContent'
import { webDevHeroContent } from '../../Data/HeroContent'

const WebDevelopment = () => {
    return (
        <div>
            <Hero hero={webDevHeroContent}/>
            <IconCards title={webDevTitle} content={webDevCardContent} />
            <IconCards title={frontEndTitle} content={frontendCardContent} />
        </div>
    )
}

export default WebDevelopment
