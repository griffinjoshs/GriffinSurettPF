import React from 'react'
import Hero from '../../Components/Hero/index'
import IconCards from '../../Components/IconCardSection'
import { marketingCardContent, marketingTitle } from '../../Data/CardContent'
import { marketingHeroContent } from '../../Data/HeroContent'

const Marketing = () => {
    return (
        <div>
            <Hero hero={marketingHeroContent}/>
            <IconCards title={marketingTitle} content={marketingCardContent}/>
        </div>
    )
}

export default Marketing
